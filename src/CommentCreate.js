import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (event) => {
    console.log("hello");
    event.preventDefault();
    if (content !== "") {
      console.log("hello2");
      await axios.post(
        `${process.env.REACT_APP_COMMENT_URL}/posts/${postId}/comments`,
        {
          content,
        }
      );
      setContent("");
    }
    // window.location.reload()
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>New Comment</label>{" "}
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
