import React from 'react';
import './App.css';


//Import
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';


function App() {
  return (
    <div className="App">
      <Header/>

      <div className="app-page">
         <Sidebar/>
          <RecommendedVideos/> 
      </div>
      
     

     
    </div>
  );
}

export default App;
