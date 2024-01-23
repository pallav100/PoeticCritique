import { DatabaseCallbackFunction } from "../types/databse";
import {SQLiteDBInstance} from "./connection";

/*** The purpose of this fucntions is to provide a unified interface
 * for insertion, updation and reading
 * from any table in the database */


/**
 * Read all records and all their columns from some given table.
 */
const getAll = async ({ table, callback }: {table: String, callback: DatabaseCallbackFunction}) => {
  if(SQLiteDBInstance != null){
    await SQLiteDBInstance.all(`SELECT * FROM ${table}`, (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(null, err); // Pass the error to the callback
      } else {
        callback(rows, null); // Pass the results to the callback
      }
    });
  }
};

/**
 * Read speicifc records and all their columns from some given table.
 */
const get = async ({ table, condition, callback }: {table: String, condition: String, callback: DatabaseCallbackFunction}) => {
  
  if(SQLiteDBInstance != null){
      await SQLiteDBInstance.all(`SELECT * FROM ${table} WHERE ${condition}`, (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(null, err); // Pass the error to the callback
      } else {
        callback(rows, null); // Pass the results to the callback
      }
    });
  }
};

/**
 * Run an INSERT query on some given table and insert the given object.
 */
const create = async ({ table, object, callback }: {table: String, object: Object, callback: DatabaseCallbackFunction}) => {
  if(SQLiteDBInstance != null){
    const keys = Object.keys(object).join(",");
    const values = Object.values(object)
      .map((v) => `"${v}"`)
      .join(",");
      let query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
      await SQLiteDBInstance.run(query, function (err) {
        if (err) {
          console.error(err);
          callback(null, err); // Pass the error to the callback
        } else {
          callback(this, null); // Pass the results to the callback
        }
    });
  }
};


export {getAll, get, create};