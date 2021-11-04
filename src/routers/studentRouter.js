const express = require("express");
const student = require("../models/students");

// it works same as app = express()
const router = new express.Router();



// Handling Post request to add students 
router.post("/students", async (req, res) => {

    try{
        const data = new student(req.body);

        const result = await data.save()
        res.status(201).send(result);
    }
    catch(err){
        res.status(400).send(err);
    }
    
})



// Handling Get request to show all the data in the database
router.get("/students", async (req, res) => {

    try{
        const data = await student.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }

})


// Handling Get Request for an indivisual data 
router.get("/students/:name", async (req, res) => {

    let objName = req.params.name;

    try{
        const data = await student.find({name: objName});

        if (!data){
            res.status(404).send();
        }
        else{ 
            res.status(200).send(data);
        }
    }
    catch(err){
        res.status(400).send(err);
    }

})




// Handling Patch request for updating Data

router.patch("/students/:id", async (req, res) => {

    try {
        
        const result = await student.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});


        if(!result){
            res.status(404).send();
        }
        else{
            res.status(200).send(result);
        }

    } catch (error) {
        res.status(400).send(error);
    }

})



// Handling Delete request to delete data

router.delete("/students/:id", async (req, res) => {

    try {
        
        const result = await student.findByIdAndRemove({_id: req.params.id});

        if(!result){
            res.status(404).send();
        }
        else{
            res.status(200).send(result);
        }

    } catch (error) {
        res.status(400).send(error);
    }

})



module.exports = router;