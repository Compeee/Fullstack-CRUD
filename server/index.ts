import express, { NextFunction, Response, Request } from "express";
import bodyParser from "body-parser";
import peopleRoutes from "./routes/routes";

const app = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api", peopleRoutes);

app.listen(5000, () => {
  console.log("API is running on port 5000...");
});
