import axios from "axios";


const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    // params: {
    //   part: "snippet",
    //   maxResults: 5,
    //   key: KEY,
    // },
  });

export default youtube