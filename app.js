const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const todos = [
    {todo : "wake up", isCompleted: false},
    {todo : "Eat Breakfast", isCompleted: false}
];

app.get("/todos" , (req , res) => {
    res.status(200);
    res.json(todos);
});

app.post("/create/todo" , (req , res) => {
    const newTodoElement = {todo: req.body.todo , isCompleted: req.body.isCompleted}
    todos.push(newTodoElement);
    res.json(todos);
})

app.put("/update/todo/:name" , (req , res) => {
    const updatedTodo = req.params.name;
    let i;
    const match = todos.find((element , index)=>{
        i = index;
        return element.todo === updatedTodo
    });
    if(match){
        todos[i]= req.body;
        res.status(200);
        res.send(todos[i]);
    }
    else{
        res.status(404);
        res.send("No Match found")
    }
});

app.listen(port , ()=> {
    console.log(`Practice app listening at http://localhost:${port}`)
})