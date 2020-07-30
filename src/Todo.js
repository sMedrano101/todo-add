import React from "react";

const Todo = (props) => {
  return (
    <ul>
      <li>
        <h2>{props.info}</h2>
        <button onClick={(event) => props.todo}>DELETE BUTTON</button>
      </li>
    </ul>
  );
};

export default Todo;
