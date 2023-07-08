import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res =await axios.get(`${process.env.REACT_APP_COMMENT_URL}/posts/${postId}/comments`);
    // console.log(res,"res")

    setComments(res.data);
  };
  useEffect(() => {
    fetchComments();
  },[]);
  console.log(comments,"comments")
  const renderComments = comments?.map((comment) => {
    console.log(comment,"comment");
    return (
      <li style={{ width: "30%", marginBottom: "20px" }} key={comment.id}>
        {comment.content}
      </li>
    );
  });
  return <ul>{renderComments}</ul>;
};

export default CommentList;
