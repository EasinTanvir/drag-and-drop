import React, { useState } from "react";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodoHandler = () => {
    setTodo([...todo, { title: text, id: Math.round(Math.random() * 100000) }]);
    setText("");
  };

  return (
    <div className="w-[570px] py-4 px-8 bg-slate-900 rounded-md">
      <h1 className="text-center text-white font-semibold text-2xl">
        Todo Application
      </h1>
      <hr className="my-4" />

      {/* adding todo here */}
      <div className="flex gap-3 my-6">
        <input
          placeholder="Enter Title"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="flex-1 rounded-md py-2 px-4"
        />
        <button
          onClick={addTodoHandler}
          className="bg-teal-700 px-4 py-1 rounded-md text-white"
        >
          Add Todo
        </button>
      </div>
      {/* adding todo here */}

      {/* render todo ittems */}
      {todo.map((item) => (
        <TodoItems key={item.id} {...item} />
      ))}
      {/* render todo ittems */}
    </div>
  );
};

export default TodoList;
