import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBookById, deleteBookById } from "../controllers/book.controller";

const router = Router();

/**
 * @route GET /books
 * @desc Get all books
 */

router.get("/", getAllBooks);

/**
 * @route GET /books/:id
 * @desc Get a single book by ID
 */
router.get("/:id", getBookById);

/**
 * @route POST /new/books
 * @desc Create a new book
 */
router.post("/new", createBook);

/**
 * @route DELETE /books/:id
 * @desc Delete a book by ID
 */

router.delete("/:id", deleteBookById);

/**
 * @route PATCH /books/:id
 * @desc Update a book by ID
 */

router.patch("/:id", updateBookById);

export default router;
