import React, { useState } from "react";
import TodoItems from "./TodoItems";
import { ReactSortable } from "react-sortablejs";

const TodoList = ({ todo, setTodo }) => {
  return (
    <div className="min-h-full space-y-4 ">
      {todo.map((item, i) => (
        <TodoItems key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
