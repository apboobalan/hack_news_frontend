import React from "react";

const Info = ({children}) => (
  <div className="fixed top-0 right-0 bg-gray-900 text-center py-4 lg:px-4 rounded m-5">
    <div
      className="p-2 bg-gray-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span className="flex rounded-full bg-black uppercase px-2 py-1 text-xs font-bold mr-3">
        INFO
      </span>
      <span className="font-semibold mr-2 text-left flex-auto">{children}</span>
    </div>
  </div>
);

export default Info;
