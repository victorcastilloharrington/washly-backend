import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/washly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((err: any) => console.error("DB connection failed" + err));

// rest of the code remains same

app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
