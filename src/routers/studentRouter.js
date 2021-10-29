const express = require("express");

const router = new express.Router();



// Defining the router
router.get("/me", (req, res) => {
    res.send("hello this is router");
})



module.exports = router;