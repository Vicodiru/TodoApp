import React, { useState } from 'react';
import { Trash2, CheckCheck } from 'lucide-react';

const TodoListItem = ({ item, todo, set }) => {
  const [strikeThrough, setStrikeThrough] = useState(false);

  const itemDown = (id) => {
    const itemIndex = todo.indexOf(id);
    if (itemIndex !== -1) {
      todo.splice(itemIndex, 1);
      todo.push(itemIndex);
    }
  };
  const removeItem = (id) => {
    let filteredTodos = todo.filter((item) => item.id !== id);
    set(filteredTodos);
  };

  const handleStrikethrough = (id) => {
    setStrikeThrough(!strikeThrough);
  };

  const random = (id) => {
    set((prevTodos) => {
      const itemIndex = prevTodos.findIndex((item) => item.id === id);
      const selectedItem = prevTodos[itemIndex];
      const updatedTodos = prevTodos.filter((item) => item.id !== id);
      updatedTodos.push(selectedItem);
      return updatedTodos.map((item) =>
        item.id === id ? { ...item, active: item.active } : item
      );
    });
  };

 

  return (
    <main
      className={`${
        strikeThrough ? 'text-gray-300' : ''
      } " flex items-center gap-5 border-b border-solid border-gray-300 cursor-pointer hover:"`}
      onChange={() => random() }
    >
      <div className="px-5 py-3">
        <input
          type="checkbox"
          name=""
          id=""
          checked={strikeThrough ? item.active : !item.active}
        />
      </div>
      <div className=" w-9/12 px-5 py-3">
        <h3 className={strikeThrough ? 'line-through' : ''}>{item.value}</h3>
      </div>
      <div className=" flex items-center justify-between">
        <button
          className=" flex justify-center items-center px-3 py-3 group hover:bg-red-700/20 rounded-lg"
          onClick={() => removeItem(item.id)}
        >
          <Trash2
            className=" group-hover:text-red-500"
            size={20}
            strokeWidth={0.5}
            absoluteStrokeWidth
          />
        </button>
        <button
          className=" flex justify-center items-center px-3 py-3 group hover:bg-green-500/20 rounded-lg"
          onClick={() => handleStrikethrough(item.id)}
        >
          <CheckCheck
            className={`${strikeThrough ? 'group text-green-900' : ''}
            " group-hover:text-green-900"`}
            size={20}
            strokeWidth={1.3}
            absoluteStrokeWidth
          />
        </button>
      </div>
    </main>
  );
};

export default TodoListItem;
