// global.d.ts
import { ZodError } from "zod";

declare global {
  // Define a custom error type that includes both Error and ZodError
  type GlobalError = Error | ZodError | unknown;

  // Optionally extend Error if you want to add custom properties
  interface Error {
    statusCode?: number;
  }
}

export {}; // This ensures the file is treated as a module.
