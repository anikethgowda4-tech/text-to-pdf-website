import React from "react";

const TextEditor = ({ text, setText }) => {
  return (
    <textarea
      className="textarea"
      placeholder="Type or paste your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextEditor;
