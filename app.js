const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const todos = [
    { todo : "wake up", isCompleted: false},
    {todo : "Eat Breakfast", isCompleted: false}
];

app.get("/todos" , (req , res) => {
    res.status(200);
    res.json(todos);
});


app.listen(port , ()=> {
    console.log(`Practice app listening at http://localhost:${port}`)
})