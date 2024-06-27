import React from "react";

const TodoItems = ({ id, title }) => {
  return (
    <div className="my-6  bg-gray-500 px-2 py-1 rounded-md">
      <h1 className="text-white  text-2xl">{title}</h1>
    </div>
  );
};

export default TodoItems;
