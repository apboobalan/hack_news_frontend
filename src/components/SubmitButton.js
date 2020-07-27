import React from "react";

const SubmitButton = ({ onClickHandler, testId, children }) => {
  return (
    <div
      className="bg-black text-white inline-block p-3 rounded hover:bg-white hover:text-black border border-black cursor-pointer"
      data-testid={testId}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default SubmitButton;
