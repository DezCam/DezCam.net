import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertWaitingListSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Confirm API key is loading (first 6 chars only)
const apiKeyPreview = process.env.RESEND_API_KEY
  ? `${process.env.RESEND_API_KEY.slice(0, 6)}...`
  : "NOT SET";
console.log(`[Resend] API key loaded: ${apiKeyPreview}`);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      // Send email notification via Resend
      const subject = validatedData.service
        ? `New Inquiry from ${validatedData.name} - ${validatedData.service}`
        : `New Inquiry from ${validatedData.name}`;

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "DezCam Contact Form <noreply@dezcam.net>",
        to: "desmondjr88@gmail.com",
        subject,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f7f3e8; border-radius: 8px;">
            <h2 style="color: #111614; border-bottom: 2px solid #d6b36a; padding-bottom: 12px; margin-bottom: 20px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6a6e6b; font-weight: 600; width: 140px;">Name</td>
                <td style="padding: 8px 0; color: #111614;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6a6e6b; font-weight: 600;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${validatedData.email}" style="color: #245c3b;">${validatedData.email}</a></td>
              </tr>
              ${validatedData.company ? `
              <tr>
                <td style="padding: 8px 0; color: #6a6e6b; font-weight: 600;">Company / Project</td>
                <td style="padding: 8px 0; color: #111614;">${validatedData.company}</td>
              </tr>` : ""}
              ${validatedData.service ? `
              <tr>
                <td style="padding: 8px 0; color: #6a6e6b; font-weight: 600;">Service Interest</td>
                <td style="padding: 8px 0; color: #111614;">${validatedData.service}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6a6e6b; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #111614; white-space: pre-wrap;">${validatedData.message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 12px 16px; background: #245c3b; border-radius: 6px; color: #f7f3e8; font-size: 13px;">
              Reply directly to this email or reach out to <strong>${validatedData.email}</strong>
            </div>
          </div>
        `,
      });

      if (emailError) {
        console.error("[Resend] Notification email FAILED:", JSON.stringify(emailError));
      } else {
        console.log("[Resend] Notification email sent. ID:", emailData?.id);
      }

      // Send confirmation email to visitor
      const firstName = validatedData.name.trim().split(/\s+/)[0];
      try {
        const { data: confirmData, error: confirmError } = await resend.emails.send({
          from: "Desmond at DezCam <noreply@dezcam.net>",
          to: validatedData.email,
          subject: "Got your message — Desmond from DezCam",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f7f3e8;">
              <p style="color: #3d4240; font-size: 16px; margin: 0 0 20px;">Hi ${firstName},</p>
              <p style="color: #3d4240; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                Thanks for reaching out. I've received your message and will follow up within 2 business days to learn more about your project.
              </p>
              <p style="color: #3d4240; font-size: 16px; line-height: 1.7; margin: 0 0 32px;">
                In the meantime, feel free to browse <a href="https://dezcam.net" style="color: #399a4b; text-decoration: none;">dezcam.net</a> to get a better sense of how I work.
              </p>
              <p style="color: #3d4240; font-size: 16px; margin: 0 0 4px;">Talk soon,</p>
              <p style="color: #3d4240; font-size: 16px; font-weight: 600; margin: 0 0 4px;">Desmond</p>
              <p style="color: #6a6e6b; font-size: 14px; margin: 0;">DezCam · <a href="https://dezcam.net" style="color: #399a4b; text-decoration: none;">dezcam.net</a></p>
              <div style="margin-top: 32px; border-top: 1px solid #aab0aa; padding-top: 16px;">
                <p style="color: #aab0aa; font-size: 12px; margin: 0;">You're receiving this because you submitted a contact form at dezcam.net.</p>
              </div>
            </div>
          `,
        });
        if (confirmError) {
          console.error("[Resend] Confirmation email FAILED:", JSON.stringify(confirmError));
        } else {
          console.log("[Resend] Confirmation email sent. ID:", confirmData?.id);
        }
      } catch (confirmErr) {
        console.error("[Resend] Confirmation email threw:", confirmErr);
      }

      console.log("New contact form submission:", contact);

      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you soon.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while sending your message. Please try again." 
        });
      }
    }
  });

  // Get all contacts (for admin purposes, not exposed in UI)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });

  // Waiting list signup endpoint
  app.post("/api/waiting-list", async (req, res) => {
    try {
      const validatedData = insertWaitingListSchema.parse(req.body);
      const entry = await storage.createWaitingListEntry(validatedData);
      
      // Log for notification (in a real app, you'd send an email notification)
      console.log("New waiting list signup:", entry);
      
      res.json({ 
        success: true, 
        message: "Thank you for joining the waiting list! I'll notify you when trading classes are available.",
        id: entry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        console.error("Waiting list signup error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while joining the waiting list. Please try again." 
        });
      }
    }
  });

  // Get all waiting list entries (for admin purposes)
  app.get("/api/waiting-list", async (req, res) => {
    try {
      const entries = await storage.getWaitingList();
      res.json(entries);
    } catch (error) {
      console.error("Get waiting list error:", error);
      res.status(500).json({ message: "Failed to retrieve waiting list" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
