// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import SearchPage from "./pages/SearchResultsPage/SearchResultsPage";
import React, { useState } from 'react';


// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  const [currentVideo, setCurrentVideo] = useState('rGfWMaZJR0I');
  console.log(currentVideo)

  return (
    <div>
      <Navbar />      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SearchPage setCurrentVideo = {setCurrentVideo}/>
              <YouTubePage currentVideo = {currentVideo}/>  
              {/* <VideoPage currentVideo = {currentVideo}/> */}
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>      
    </div>
    
  );
}

export default App;