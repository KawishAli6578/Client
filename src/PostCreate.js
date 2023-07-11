import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault()
    if(title!==""){
      console.log("window")
    await axios.post(`${process.env.REACT_APP_POST_URL}/posts`, {
      title,
    }).then((res)=>{
      console.log(res,"res")
      setTitle("")
   console.log("work")
      window.location.reload()
    })
    
  }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
