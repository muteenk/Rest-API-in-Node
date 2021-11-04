const express = require("express");
const studentRouter = require("./routers/studentRouter");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;


// Middleware for json
app.use(express.json());


// Router Config
app.use(studentRouter);




app.listen(port, () => {
    console.log("Server Started at port 3000");
})