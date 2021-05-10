const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const todos = [
    { todo : "wake up", isCompleted: false},
    {todo : "Eat Breakfast", isCompleted:false}
];