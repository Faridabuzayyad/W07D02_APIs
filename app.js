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
        res.json(todos[i]);
    }
    else{
        res.status(404);
        res.json("No Match found")
    }
});

app.delete("/delete/todo/:name" , (req , res)=>{
    const deletedTodo = req.params.name;
    let i;
    const match = todos.find((element , index)=>{
        i = index;
        return element.todo === deletedTodo
    });

    if(match){
        res.status(200);
        let deleted = todos.splice(i , 1);
        res.json(deleted);
    }
    else{
        res.status(404);
        res.json("No Match found")
    }
});


app.put("/complete/todo/:name" , (req , res) => {
    const completedTodo = req.params.name;
    let i;
    const match = todos.find((element , index)=>{
        i = index;
        return element.todo === completedTodo
    });

    if(match){
        res.status(200);
        todos[i].isCompleted = true;
        res.json("updated");
    }
    else{
        res.status(404);
        res.json("No Match found");
    }
});

app.get("/completed/todos" , (req , res) => {
    completedTodos = todos.filter((element , index)=>{
        return todos[index].isCompleted === true;
    });

    if(completedTodos.length > 0){
        res.status(200);
        res.json(completedTodos);
    }
    else{
        res.status(404);
        res.json("No completed Todos found");
    }
    
});

app.listen(port , ()=> {
    console.log(`Practice app listening at http://localhost:${port}`)
})