import { SchemaObject } from "../types/databse";

export const promptTableSchema: SchemaObject = {
    ID: "INTEGER PRIMARY KEY AUTOINCREMENT",
    prompt: "TEXT",
    model_response : "TEXT NOT NULL",
    timestamp: "TEXT NOT NULL",
}

/*** In future replace this with an ORM like Prisma
 *  to better manage schema and operations on database
 * */
