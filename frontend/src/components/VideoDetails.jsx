import React from "react";
import {Paper, Typography } from '@material-ui/core'
const VideoDetail = ({ video }) => {
  
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/GZdiyMlPQDM`;
  console.log('video detail')
  return (
    <React.Fragment>
          <Paper elevation={6} style={{ height: '80%' }}>   
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
          </Paper>
          <Paper elevation={6} style={{ padding: '15px'}}>   
            <Typography align='h4'>{video.title} - {video.snippet.channelTitle}</Typography>
            <Typography align="subtitle1">{video.channelTitle}</Typography>
            <Typography align="subtitle1">{video.description}</Typography>
          </Paper>
          
        </React.Fragment>
    ) 
};

export default VideoDetail;