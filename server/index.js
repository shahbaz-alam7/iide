import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/crud.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

try {
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error("Connection error", error);
}

app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
