import React from 'react';
// import './VideoItem.css'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
    const onVideoClick = () => {
        onVideoSelect(video);
    }
    return (
      <Grid item xs={8}>
      <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
          <img style={{marginRight: '20px'}} src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
          <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
      </Paper>
  </Grid>
)
}

export default VideoItem 