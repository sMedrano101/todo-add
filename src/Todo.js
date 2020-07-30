import React from "react";
// let [value,settigdata]
const Todo = (props) => {
  // [Mustafa,steve]
  return (
    <ul>
      {props.info[0].map((todo) => (
        <li>
          {todo}{" "}
          <button
            onClick={() =>
              props.info[1](props.info[0].filter((e) => e != todo))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
