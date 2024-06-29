import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { todoItems } from "./utils/items";

const App = () => {
  const [todo, setTodo] = useState(todoItems);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <React.Fragment>
          <div className="w-[570px] py-4 px-8 bg-slate-900 rounded-md">
            <h1 className="text-center text-white font-semibold text-2xl">
              Todo Application
            </h1>
            <hr className="my-4" />

            {/* render todo list */}
            <TodoList todo={todo} setTodo={setTodo} />
            {/* render todo ittems */}
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default App;
