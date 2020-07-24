import React from "react";

const ChallengeTag = ({ tag }) => (
  <div className="inline-block rounded border border-gray-300 pl-2 pr-2 m-2">
    {tag.name}
  </div>
);

export default ChallengeTag;
