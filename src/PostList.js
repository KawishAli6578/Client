import React, { useState,useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({})
    const fetchPosts=async()=>{
        const res=await axios.get(`${process.env.REACT_APP_POST_URL}/posts`)
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    // console.log(posts,"postsCheck")
    // console.log(Object.values(posts),"postsCheck2")

    const renderPost=Object.values(posts).map((post)=>{
        console.log(post,"post")
        return(
            <div style={{width:"30%",marginBottom:"20px"}} key={post._id}>
               <div>
                <h3>{post.title[1]}</h3>
                <CommentList postId={post._id}/>
                <CommentCreate postId={post._id}/>
               </div>
            </div>
        )
    })
  return (
    <div>{renderPost}</div>
  )
}

export default PostList