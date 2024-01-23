export type DatabaseCallbackFunction = (success: Object | null, error: Error | null) => void
export type SchemaObject = | {
    [key: string]: string;
}
| {};
