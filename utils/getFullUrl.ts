import type { Request } from "express";

export const getFullUrl = (req: Request) => {
    return req.protocol + "://" + req.headers.host + req.originalUrl;
};