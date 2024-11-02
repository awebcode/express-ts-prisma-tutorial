import { Router } from "express";
import bookRoutes from "./book.route";

const router = Router();

/**
 * Mount book routes at /books
 */
router.use("/books", bookRoutes);

/**
 * @route GET /
 * @desc Base route for the server
 */
router.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working!" });
});

export default router;
