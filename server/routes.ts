import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertWaitingListSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you might send an email here using nodemailer
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
