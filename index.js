import express from "express";
import dbConnect from "./src/db/connect.js";
import { config as configDotenv } from "dotenv"; // Load dotenv
import router from "./src/routes/user.js"
import rootRouter from "./src/routes/cart.js"
import wishlist from "./src/routes/wishlist.js"
import address from "./src/routes/address.js"
import cors from "cors"
// Configure dotenv
configDotenv();

const app = express();

// CORS middleware configuration to allow all origins
app.use(cors({ origin: "*" })); // This allows all domains
app.use(express.json());
app.use('/user', router);
app.use('/user', rootRouter);
app.use('/user', address);
app.use('/user', wishlist);

const port = process.env.PORT || 8989;

app.listen(port, () => {
  dbConnect();
  console.log(`Buyer service is running on port ${port}`);
});
