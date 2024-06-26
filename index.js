import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/user_routes.js";
import propertyRouter from "./routes/property_routes.js";
import dotenv from "dotenv";
import  wishlishRoutes  from "./routes/wishlish_routes.js";
dotenv.config();
const app = express();

connectDB();
const port = 5000;

app.use(express.json());
app.use('/api/user',router);
app.use('/api/properties',propertyRouter);
app.use('/api/addToWishlist',wishlishRoutes);
app.listen(port, () => {
    console.log(`Server is running port ${port}`);
});