import { SchemaObject } from "../types/databse";

export const schemaFormatter = (schemaObject: SchemaObject) => {
    let schemaString = '';
    Object.keys(schemaObject).map((key: string) => {
        //@ts-ignore
        const column = `${key} ${schemaObject[key]},`;
        schemaString+= column;
    });
    return schemaString.slice(0,-1);
}