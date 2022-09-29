// // General Imports
// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// // Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";

// // Component Imports
// import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";

// // Util Imports
// import PrivateRoute from "./utils/PrivateRoute";
// import SearchBar from "./components/SearchBar/searchbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <SearchBar/>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <HomePage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
  
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './components/Comments';
import LikeButton from './components/Buttons';
import SearchBar from './components/Search';
import VideoPlayer from './components/Video';
import { KEY } from "./localKey.js";
import './App.css';

const App = (props) => {
    // const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    // const [currentVideo, setCurrentVideo] = useState('');     

        const postComment = () => {
            axios.post('http://127.0.0.1:8000/api/comment/', {
                userName: "Shannon",
                commentText: "Test reply for vid",
                like: 0,
                dislike: 0,
            })
            .then((response) => setComments(response.data))
            .catch((error) => console.log(error)) 
        }

        const getVideo = () => {
            axios.get(`https://www.googleapis.com/youtube/v3/search?q=mernstack&key=${KEY}`,{
            videoId: "kre8q9r8xFI",
        })
            .then((response) => (response.data.items))
            .catch((error) => console.log(error))
        }
        
        const runSearch = () => {
            axios.get(`https://www.googleapis.com/youtube/v3/search?q=mernstack&key=${KEY}`)
        
            .then((response) => {
            console.log(response);
            setSearchResults(response.data.items)
        })
            .catch((error) => console.log(error))
            console.log('searchResults:', searchResults)
        }
        
        const putComment = (cid) => {
            axios.put(`http://127.0.0.1:8000/api/comment/${cid}`)
            .then((response) => (response.data))
            .catch((error) => console.log(error))
        }

        const postReply = (cid) => {
            axios.post(`http://127.0.0.1:8000/api/comment/${cid}`,{
            replyText: "Test reply."
        })
            .then((response) => (response.data))
            .catch((error) => console.log(error))
        }

        useEffect(() => {
            runSearch();
        }, [])
        

        useEffect(() => {
            // runSearch();
           axios.get('http://127.0.0.1:8000/api/comment/')
                .then((response) => setComments(response.data))
                .catch((error) => console.log(error))
        },[postComment, putComment, postReply, getVideo]); 

    return (
      
        <div>
            <h1 className="main-title">YouTube Clone Project</h1>
            <SearchBar />
            <VideoPlayer />
            <Comments comments={comments} postReply = {postReply} getVideo={getVideo}/>
            <LikeButton /><br></br>
            <button onClick={postComment}>Click to Post New Comment</button>
        </div>    
    );

    

    
}

export default App;