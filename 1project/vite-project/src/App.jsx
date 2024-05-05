//import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import AddTodo from "./component/AddToDo";
import AppName from "./component/AppName";
import TodoItems from "./component/TodoItems";
import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  //const [todoItems, setTodoItems] = useState();

  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added:${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: "right now" },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage> </WelcomeMessage>}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
