import express from "express";
import { registerMiddlewares } from "./middlewares/index.middleware";

const PORT = 5000;
const app = express();

// Register all middlewares
registerMiddlewares(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
