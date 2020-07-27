import React from "react"

const Sort = ({sort, onSortBy}) => {

    const onSortClick = () => {
        const sortBy = {type: sort === "votes" ? "created" : "votes"}
        onSortBy(sortBy)
    }
    return (
        <div className="inline-block"> sort by :&nbsp;
          {sort === "votes" ? (
            <div className="inline-block">
              votes | <div className="inline-block underline cursor-pointer" onClick={onSortClick}>created</div>
            </div>
          ) : (
            <div className="inline-block">
              <div className="inline-block underline cursor-pointer" onClick={onSortClick}>votes</div> | created
            </div>
          )}
        </div>
      );
}

export default Sort