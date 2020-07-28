import React from "react";

const AuthInfo = ({ instruction, onClick }) => (
  <div className="p-3">
    {instruction}
    <div onClick={onClick} className="underline inline-block cursor-pointer">
      click here.
    </div>
  </div>
);

export default AuthInfo;
