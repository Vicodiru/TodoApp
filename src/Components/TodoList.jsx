import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, set }) => {
  console.log(todos);

  return (
    <div className=" flex flex-col h-full px-5">
      {todos.map((item, index) => (
        <TodoListItem  key={index} item={item} todo={todos} set={set} />
      ))}
    </div>
  );
};

export default TodoList;
