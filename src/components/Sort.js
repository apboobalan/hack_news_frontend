import React from "react";

const Sort = ({ sort, onSortBy }) => {
  const onSortClick = () => {
    const sortBy = { type: sort === "votes" ? "created" : "votes" };
    onSortBy(sortBy);
  };

  const link = (sortBy) => (
    <div className="inline-block underline cursor-pointer" onClick={onSortClick}>
      {sortBy}
    </div>
  );
  return (
    <div className="inline-block">
      sort by :&nbsp;
      {sort === "votes" ? (
        <div className="inline-block">votes | {link("created")}</div>
      ) : (
        <div className="inline-block">{link("votes")}| created</div>
      )}
    </div>
  );
};

export default Sort;
