# nodejs-bun


# Key Features of This Implementation:
- Express Setup: Basic Express server setup with JSON body parsing.
- Prisma & POSTGRESQL
- MVC Architecture
- CRUD Operations: Handlers for creating, reading, updating, and deleting Book items.
- UUID Handling: Uses UUIDs for the id field.
- Zod Validation: Validates incoming requests to - - - ensure that the title is provided and that it meets specified criteria.
Error Handling: Includes basic error handling for not found routes and general errors.
Running the Server
Ensure you have your PostgreSQL database running and the DATABASE_URL environment variable set up correctly in your .env file.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.



## npx prisma migrate dev --name create-book
npx prisma generate
Start the server:

## npx ts-node src/index.ts
(Assuming your server file is named index.ts and located in a src folder)
