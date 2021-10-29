const express = require("express");
const student = require("./models/students");
const studentRouter = require("./routers/studentRouter");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;


// Middleware for json
app.use(express.json());


// Router Config
app.use(studentRouter);



// End points 

// Handling Post request to add students 
app.post("/students", async (req, res) => {

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
app.get("/students", async (req, res) => {

    try{
        const data = await student.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }

})


// Handling Get Request for an indivisual data 
app.get("/students/:name", async (req, res) => {

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

app.patch("/students/:id", async (req, res) => {

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

app.delete("/students/:id", async (req, res) => {

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




app.listen(port, () => {
    console.log("Server Started at port 3000");
})