// utils/handleError.ts
import { fromZodError } from "zod-validation-error";
import { AppError } from "../middlewares/errors/ErrorHandler";
import { ZodError } from "zod";

export function handleError(error: unknown): never {
  if (error instanceof ZodError) {
    // Handle Zod validation errors
    throw new AppError(fromZodError(error).toString(), 400); // You can set a specific status code for validation errors
  } else if (error instanceof Error) {
    // Handle generic errors
    throw new AppError(`${error.message || "An error occurred"} `, 500);
  }

  // Fallback for unknown error types
  throw new AppError("An unknown error occurred.", 500);
}
