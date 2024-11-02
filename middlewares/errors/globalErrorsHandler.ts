import { Request, Response, NextFunction } from "express";
import { AppError } from "./ErrorHandler"; // Adjust path as necessary
import { handleError } from "../../utils/handleError"; // Adjust path as necessary
import { getFullUrl } from "../../utils/getFullUrl";

/**
 * Global error-handling middleware
 * @param err - The error object
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const globalErrorHandler = (
  err: unknown, // Use unknown to handle all types of errors
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Use handleError to throw an AppError or return a formatted error
    handleError(err);
  } catch (error) {
    // Check if the error is an instance of AppError
    if (error instanceof AppError) {
      // Handle known, operational errors
      res.status(error.statusCode).json({
        success: false,
        url: getFullUrl(req),
        status: "error",
        method: req.method,
        message: error.message,
      });
    } else {
      // Handle unknown or unhandled errors
      console.error("Unexpected Error:", error);
      res.status(500).json({
        success: false,
        url: getFullUrl(req),
        method: req.method,
        status: "error",
        message: "Something went wrong, please try again later.",
      });
    }
  }
};
