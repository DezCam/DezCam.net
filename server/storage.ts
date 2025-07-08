import { users, contacts, waitingList, type User, type InsertUser, type Contact, type InsertContact, type WaitingListEntry, type InsertWaitingList } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getWaitingList(): Promise<WaitingListEntry[]>;
  createWaitingListEntry(entry: InsertWaitingList): Promise<WaitingListEntry>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getWaitingList(): Promise<WaitingListEntry[]> {
    return await db.select().from(waitingList);
  }

  async createWaitingListEntry(entry: InsertWaitingList): Promise<WaitingListEntry> {
    const [newEntry] = await db
      .insert(waitingList)
      .values(entry)
      .returning();
    return newEntry;
  }
}

export const storage = new DatabaseStorage();