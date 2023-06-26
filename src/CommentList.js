import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res =await axios.get(`https://coment.vercel.app/posts/${postId}/comments`);

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  },[]);
  const renderComments = comments?.map((comment) => {
    return (
      <li style={{ width: "30%", marginBottom: "20px" }} key={comment.id}>
        {comment.content}
      </li>
    );
  });
  return <ul>{renderComments}</ul>;
};

export default CommentList;
