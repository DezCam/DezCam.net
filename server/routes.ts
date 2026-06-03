import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertWaitingListSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

      try {
        await resend.emails.send({
          from: "DezCam Contact Form <onboarding@resend.dev>",
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
      } catch (emailError) {
        console.error("Email notification failed (submission still saved):", emailError);
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
