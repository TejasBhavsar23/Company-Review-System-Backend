import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/FeedbackRoutes.js";


const app = express();
const port = 3001;
app.use(express.json())

//mounting API routes
app.use("/api/v1",router)

dotenv.config();

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

dbConnect();
