import { Express } from "express";
import routes from "../routes/index.route";
import express from "express";
import { notFoundHandler } from "./errors/NotFoundHandler";
import { globalErrorHandler } from "./errors/globalErrorsHandler";

/**
 * Function to register all middlewares to the Express app
 * @param app - The Express app instance
 */
export const registerMiddlewares = (app: Express) => {
  // Parse JSON requests
  app.use(express.json());

  // Parse URL-encoded requests
  app.use(express.urlencoded({ extended: true }));

  // Serve static files
  app.use(express.static("public"));

  // Main application routes
  app.use("/", routes);

  // Handle 404 errors
  app.use(notFoundHandler);

  // Global error handler (must be placed last)
  app.use(globalErrorHandler);
};
