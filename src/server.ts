import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT ${port}`);
});