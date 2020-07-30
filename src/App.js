import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, formControl, Input } from "@material-ui/core";

function App() {
  //////////////////
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  //////////////////
  const handleSubmit = (e) => {
    console.log("checkmate", input);
    setTodos([...todos, input]);
    setInput(""); //you can
    console.log([...todos, input]);
  };

  return (
    <div>
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
      {todos.map((todo) => {
        return <Todo info={todo} />;
      })}
    </div>
  );
}

export default App;
