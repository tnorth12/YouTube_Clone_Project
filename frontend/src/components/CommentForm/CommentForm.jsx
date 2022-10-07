import React, { useState } from "react";
import axios from "axios";
// import VideoPage from "../../pages/VideoPage/VideoPage";
// import ReplyForm from "../ReplyForm/ReplyForm";
import './CommentForm.css';




const CommentForm = (props) => {
  const [user, setUser] = useState("");             
  const [comment, setComment] = useState([]);       
  const [videoID, setVideoID] = useState("");
  const [comments, setComments] = useState("");
  

  console.log(comment.id)


  function handleComment(event) {   
    event.preventDefault();                             
    let newComment = {
      text: comment,
      videoID: props.currentVideo,
      

    };
    console.log(newComment);
    addComment(newComment);
  }
  

  async function addComment(newComment){
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/comment/', newComment,{
      headers: {
        Authorization: "Bearer " + props.token,
      },
    });
    setComments(response.data);
   } catch (error){
      console.log(error.message);
    }
  };





  const getAllComments= async()=>{   
    let response = await axios.get('http://127.0.0.1:8000/comments/');  
    console.log(response.data) 

  }

  return (
    <form className= 'formbox' onSubmit={handleComment}>     
        <input type="text" value={comment} onChange={(event)=> setComment(event.target.value)} />     
        <input type="submit" value='Add Comment' />
         
    </form>

  
  )
};

export default CommentForm;