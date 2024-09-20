import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";

// app config
const app = express();
const port = process.env.PORT || 4000;  // Set port dynamically

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use ("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get("/", (req, res) => {
    res.status(200).send("API Working!");
});

// api routes with error handling for port conflicts
app.listen(port)
    .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port} is already in use. Please choose another port.`);
        } else {
            console.error(`Error starting server: ${err.message}`);
        }
    })
    .on('listening', () => {
        console.log(`Server is Running on http://localhost:${port}`);
    });
