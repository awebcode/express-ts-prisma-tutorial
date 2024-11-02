import { Request, Response, type NextFunction } from "express";
import { z } from "zod";
import prisma from "../prisma/prisma";
import { AppError } from "../middlewares/errors/ErrorHandler";
const bookSchema = z.object({
  title: z.string(),
  description: z.string(),
  authorId: z.string(),
});

/**
 * Get all books
 */
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single book by ID
 */
export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = z.string().parse(req.params.id);
    const book = await prisma.book.findUnique({ where: { id } });

    if (!book) {
      throw new AppError("Book not found", 404);
    }

    res.status(200).json(book);
  } catch (error) {
    console.log({ error });
    next(error);
  }
};

/**
 * Create a new book
 */
export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqBody = bookSchema.parse(req.body);
    const isExists = await prisma.book.findUnique({
      where: { title: reqBody.title },
    });

    if (isExists) {
      throw new AppError("Book already exists", 409);
    }

    const book = await prisma.book.create({ data: reqBody });
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a book by ID
 * @param id - Book ID
 * @returns The deleted book title and success status
 */
export const deleteBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = z.string().parse(req.params.id);
    if (!(await isBookExistsById(id))) {
      throw new AppError("Book not found", 404);
    }
    const book = await prisma.book.delete({ where: { id } });
    res
      .status(200)
      .json({ success: true, message: `Book ${book.title} deleted successfully` });
  } catch (error) {
    next(error);
  }
};


/**
 * Update a book by ID
 * @param id - Book ID
 * @returns The updated book
 */

export const updateBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = z.string().parse(req.params.id);
    if (!(await isBookExistsById(id))) {
      throw new AppError("Book not found", 404);
    }
    const reqBody = bookSchema.partial().parse(req.body);
    const book = await prisma.book.update({ where: { id }, data: reqBody });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
/**
 * Check if a book exists by ID
 * @param id - Book ID
 * @returns A boolean indicating existence
 */
export const isBookExistsById = async (id: string) => {
  return await prisma.book.findUnique({ where: { id } });
};
