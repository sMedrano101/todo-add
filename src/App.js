import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, formControl, Input } from "@material-ui/core";

function App() {
  //////////////////
  const [input, setInput] = useState("");
  const todos = useState([]);
  //////////////////
  const handleSubmit = (e) => {
    console.log("checkmate", input);
    todos[1]([...todos[0], input]);
    setInput(""); //you can
    console.log([...todos, input]);
  };

  // const handleDelete = () => {
  //   setTodos()
  // }

  return (
    <div>
      {/* {todos[1]("Mustafa")}
      {todos[1]([...todos[0], "steve"])}
      {console.log(todos[0])} */}
      <h1>Simple Todo App</h1>
      <formControl>
        <inputLabel>add here:</inputLabel>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </formControl>
      <Button disabled={!input} onClick={handleSubmit} variant="contained">
        Submit
      </Button>

      <Todo info={todos} />
    </div>
  );
}

export default App;
