import React, { useState,useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({})
    const fetchPosts=async()=>{
        const res=await axios.get("https://post-roan.vercel.app/posts")

        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])
    // console.log(posts,"postsCheck")
    // console.log(Object.values(posts),"postsCheck2")

    const renderPost=Object.values(posts).map((post)=>{
        // console.log(post,"post")
        return(
            <div style={{width:"30%",marginBottom:"20px"}} key={post[0]}>
               <div>
                <h3>{post[1]}</h3>
                <CommentList postId={post[0]}/>
                <CommentCreate postId={post[0]}/>
               </div>
            </div>
        )
    })
  return (
    <div>{renderPost}</div>
  )
}

export default PostList