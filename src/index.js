const express = require("express");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

// End points 

// Handling Post request to add students 
app.post("/students", (req, res) => {
    res.status(200).send("Hello this is post data");
})


app.listen(port, () => {
    console.log("Server Started at port 3000");
})