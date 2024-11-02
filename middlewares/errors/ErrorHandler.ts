export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  /**
   * Custom error class constructor
   * @param message - Error message
   * @param statusCode - HTTP status code
   * @param isOperational - Indicates if the error is operational
   */
  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintain proper stack trace (only available on V8 engines)
    Error.captureStackTrace(this, this.constructor);
  }
}
