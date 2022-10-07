import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import { KEY } from "../../localKey";
import "./VideoPage.css";


const VideoPage = (props) => {
  const [relatedVideo, setRelatedVideo] = useState(); 

  async function getRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.currentVideo}&type=video&key=${KEY}&maxResults=3&part=snippet`
    );
    console.log("Related Videos ", response.data);
    setRelatedVideo(response.data);
  }

  return (
    <div className="videoPlayer">
      <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${props.currentVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0">    
  </iframe>
  <CommentForm currentVideo = {props.currentVideo} token = {props.token} />
  <CommentList currentVideo={props.currentVideo}/>
  </div>
  );
};

export default VideoPage;

