import React from "react";

const Challenge = ({ challenge }) => (
  <div className="border border-black ml-5 mt-5 p-3 inline-block rounded shadow-lg">
    <div className="font-black p-2">{challenge.title}</div>
    {challenge.tags.map((tag) => (
      <div key={tag} className="inline-block rounded border border-gray-300 pl-2 pr-2 m-2">{tag}</div>
    ))}
  </div>
);

export default Challenge;
