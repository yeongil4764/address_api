import { Contact, Prisma } from '@prisma/client';
import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    getAll(): Promise<Contact[]>;
    getone(id: any): Promise<Contact>;
    create(createContactInput: Prisma.ContactCreateInput): Promise<Contact>;
    update(id: any, updateContactInput: Prisma.ContactUpdateInput): Promise<Contact>;
    delete(id: any): Promise<Contact>;
}
