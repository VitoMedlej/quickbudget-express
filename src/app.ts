import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Configures dotenv to work in your application
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).json('hello');
}); 

app.listen(PORT, () => { 
  console.log(`Server running at PORT: ${PORT}`); 
}).on("error", (error) => {
  // Gracefully handle error
  throw new Error(error.message);
});
