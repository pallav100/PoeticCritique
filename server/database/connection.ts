import { Database } from "sqlite3";
import { promptTableSchema } from "./schema";
import { schemaFormatter } from "../utils/schemaFormatter";
import * as fs from "fs";

const filepath = `./database/${process.env.SQLITE_DB_NAME}.db`;

let SQLiteDBInstance: Database | null = null;

function createDbConnection() {
  // Create a new sqLIte DB instance or return if already exists

  if (fs.existsSync(filepath)) {
    SQLiteDBInstance = new Database(filepath)
  } else {
    const db:Database = new Database(filepath, (error: any) => {
      if (error) {
        return console.error(error.message);
      }
    });
    createTable(db);
    console.log("New SQLite DB has been created");
    SQLiteDBInstance = db;
  }
  console.log("connection to SQLite DB established")
  return SQLiteDBInstance
}

function createTable(db: Database) {
  // Create a new table to store user queries and model response

  db.exec(`
  CREATE TABLE prompts
  (
   ${schemaFormatter(promptTableSchema)}
  );
`);
}

export { createDbConnection, SQLiteDBInstance};
