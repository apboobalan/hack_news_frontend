import React, { useState } from "react";

const CreateChallenge = ({ onClickHandler }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const onCreateNewChallenge = () => {
    onClickHandler({
      title: title,
      description: description,
      tags: formatTags(tags),
    });
  };

  const formatTags = (tags) =>
    tags.split(",").map((tag) => ({ name: tag.trim().toLowerCase() }));

  return (
    <div className="m-3 p-5 rounded border border-gray-400">
      <div className="font-black p-3">New Challenge</div>
      <label htmlFor="title" className="p-3">
        Title :
      </label>
      <input
        type="text"
        id="title"
        placeholder=" Title"
        data-testid="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description" className="p-3">
        Description :
      </label>
      <input
        type="text"
        id="description"
        placeholder=" Description"
        data-testid="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="tags" className="p-3">
        Tags :
      </label>
      <input
        type="text"
        id="tags"
        placeholder=" Tags"
        data-testid="tags"
        onChange={(e) => setTags(e.target.value)}
      />
      <div
        data-testid="submit"
        onClick={onCreateNewChallenge}
        className="bg-black text-white inline-block p-3 rounded hover:bg-white hover:text-black border border-black cursor-pointer"
      >
        CREATE NEW CHALLENGE &rarr;
      </div>
      <div className="font-black p-3 text-gray-500">Important: Provide tags separated by comma.</div>
    </div>
  );
};

export default CreateChallenge;
