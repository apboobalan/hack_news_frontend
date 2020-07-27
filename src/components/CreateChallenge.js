import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import InputWithLabel from "./InputWithLabel"

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
      <InputWithLabel
        id="title"
        label="Title :"
        type="text"
        placeholder=" Title"
        testId="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
              <InputWithLabel
        id="description"
        label="Description :"
        type="text"
        placeholder=" Description"
        testId="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <InputWithLabel
        id="tags"
        label="Tags :"
        type="text"
        placeholder=" Tags"
        testId="tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        />
      <SubmitButton testId="submit" onClickHandler={onCreateNewChallenge}>
        CREATE NEW CHALLENGE &rarr;
      </SubmitButton>
      <div className="font-black p-3 text-gray-500">
        Important: Provide tags separated by comma.
      </div>
    </div>
  );
};

export default CreateChallenge;
