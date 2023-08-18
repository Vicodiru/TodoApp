import React from 'react';

const TodoContainer = ({ children }) => {
  return (
    <div className="bg-white h-[500px] w-[500px] rounded-lg p-10 flex flex-col ">
      {children}
    </div>
  );
};

export default TodoContainer;
