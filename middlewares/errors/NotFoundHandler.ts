import { Request, Response } from "express";
import { getFullUrl } from "../../utils/getFullUrl";

/**
 * Middleware to handle 404 (Not Found) errors
 * @param req - Express request object
 * @param res - Express response object
 */
export const notFoundHandler = (req: Request, res: Response) => {
  const url = getFullUrl(req);
  res.status(404).json({
    status: "fail",
    message: "Route not found",
    url,
  });
};
