import { users, contacts, waitingList, type User, type InsertUser, type Contact, type InsertContact, type WaitingListEntry, type InsertWaitingList } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getWaitingList(): Promise<WaitingListEntry[]>;
  createWaitingListEntry(entry: InsertWaitingList): Promise<WaitingListEntry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentContactId: number;
  private waitingListEntries: WaitingListEntry[] = [];
  private currentWaitingListId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentWaitingListId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getWaitingList(): Promise<WaitingListEntry[]> {
    return [...this.waitingListEntries].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  async createWaitingListEntry(entry: InsertWaitingList): Promise<WaitingListEntry> {
    const id = this.currentWaitingListId++;
    const newEntry: WaitingListEntry = {
      ...entry,
      id,
      createdAt: new Date(),
    };
    this.waitingListEntries.push(newEntry);
    return newEntry;
  }
}

export const storage = new MemStorage();