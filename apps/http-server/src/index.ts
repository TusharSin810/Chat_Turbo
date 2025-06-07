import express from "express";

const app = express();
const port = 4000;

app.get("/signup", (req,res) => {
    res.send("Hello World !!");
})

app.get("/signin", (req,res) => {
    res.send("Hello World !!");
})

app.get("/chat", (req,res) => {
    res.send("Hello World !!");
})

app.listen(port , () => {
    console.log(`Running on Port ${port}`);
})