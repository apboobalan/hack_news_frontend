import React from "react";

const Challenge = ({ challenge }) => (
  <div>
    <title>{challenge.title}</title>
    {challenge.tags.map((tag) => (
      <div key={tag}>{tag}</div>
    ))}
  </div>
);

export default Challenge;
