import React from "react";

const SubmitLink = ({ children, onClick }) => (
  <div className="underline inline-block pl-5 cursor-pointer " onClick={onClick}>
    {children}
  </div>
);

export default SubmitLink;
