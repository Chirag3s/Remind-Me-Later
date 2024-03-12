require("dotenv").config();

const express = require("express");
const app = express();
const routers = require("./routers/auth-routes");
const connectDB = require("./utils/db");
const authrouters = require("./routers/auth-routes");

app.use(express.json());
app.use("/api/reminder/",authrouters);
const PORT = 8080;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is Running on ${PORT}`);
    });
});
