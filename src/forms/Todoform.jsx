import React, { useEffect } from 'react';
import Button from '../Components/Button';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Todoform = ({ handleAdd, handleDelete }) => {
  const [todo, setTodo] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    handleAdd({
      id: uuid(),
      value: todo,
      active: true,
    });
  };

  useEffect(() => {
    if (todo.length > 0) {
      setDisabled(!disabled);
    } else {
      setDisabled(false);
    }
  }, [todo]);

  return (
    <div className=" w-full flex items-center justify-between mb-10">
      <input
        type="text"
        value={todo}
        onChange={handleInputChange}
        className=" border border-solid border-gray-300 w-[70%] px-5 py-3 outline-none rounded-xl"
      />

      <Button type="submit" disabled={!todo} onClick={handleSubmit}>
        Add Todo
      </Button>
    </div>
  );
};

export default Todoform;
