import React from 'react';

const Button = ({ disabled, children, ...rest }) => {
  return (
    <button
      className={` ${
        disabled
          ? ' bg-slate-300'
          : 'bg-slate-600 hover:bg-slate-500'
      } text-white p-1 rounded-xl ease-linear transition px-5 py-3 cursor-pointer `}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
