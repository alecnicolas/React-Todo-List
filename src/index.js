import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TodoForm from "./TodoForm";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoForm/>
    </div>,
    destination
);
