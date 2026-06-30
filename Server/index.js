import dotenv from "dotenc";
dotenv.config();

import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend project" });
});

//Default Error Handler

app.use((err,req,res,next )=>{
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatuisCode = err.statusCode || 500;

  res.status(ErrStatusCode).json({message : ErrMessage});
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on Port :", port);
  connectDB();
});