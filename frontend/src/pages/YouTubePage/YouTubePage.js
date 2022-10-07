import React from "react";
import { useEffect, useState } from "react";
// import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPage from "../VideoPage/VideoPage";
// import ReplyForm from "../../components/ReplyForm/ReplyForm";
import './YouTubePage.css';



const YouTubePage = (props) => {  
  const [user, token] = useAuth();
  const [comment, setComment] = useState([]);
  

  useEffect(() => {
    const fetchComment = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/comment/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComment(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComment();
  }, [token]);

  console.log(token)
  return (
    <div className="container">
      {console.log('Test', props.currentVideo)}
      <h1 className = 'Header'>Enjoy the Vid!</h1>      
      <VideoPage currentVideo = {props.currentVideo} token = {token}/>  
      {/* <ReplyForm user={user.username} currentVideo = {props.currentVideo} token = {token}/>   */}

    </div>
  );
};

export default YouTubePage;