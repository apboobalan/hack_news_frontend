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

  const formatTags = (tags) => tags.split(",").map((tag) => ({name: tag.trim().toLowerCase()}));

  return (
    <div>
      <div>New Challenge</div>
      <label htmlFor="title">Title :</label>
      <input
        type="text"
        id="title"
        data-testid="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description :</label>
      <input
        type="text"
        id="description"
        data-testid="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="tags">Tags :</label>
      <input
        type="text"
        id="tags"
        data-testid="tags"
        onChange={(e) => setTags(e.target.value)}
      />
      <div data-testid="submit" onClick={onCreateNewChallenge}>
        CREATE NEW CHALLENGE &rarr;
      </div>
      <div>Important: Provide tags separated by comma.</div>
    </div>
  );
};

export default CreateChallenge;
