import React from "react";

const TodoItems = ({ title, id }) => {
  return (
    <div className={` cursor-grab  px-4 py-1 rounded-md bg-rose-700`}>
      <h1 className="text-white  text-2xl">{title}</h1>
    </div>
  );
};

export default TodoItems;
