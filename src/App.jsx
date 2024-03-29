import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import "./App.css";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
// import Wlcm from "./components/Wlcm";

function App() {

const [todoItems, setTodoItems] = useState([]);

const handleNewItem = (itemName, itemDueDate) => {

   setTodoItems((currValue) => [
      ...currValue, 
      {name: itemName,
    dueDate: itemDueDate },
  ]);
};

const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  console.log(`Item Deleted:${todoItemName}`);
  setTodoItems(newTodoItems);
};

  return (
    <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
 
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  )
}

export default App


