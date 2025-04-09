import { useState } from 'react'
import './App.css'
import Header from './Header';
import Feed from './Feed';

function App() {
  const feedPics = [
    {imageUrl: "/Images/pexels-pixabay-38238.jpg"},
    {imageUrl: "/Images/summer-2880261_640.jpg"},
    {imageUrl: "/Images/pexels-pixabay-38238.jpg"}
  ];

  return (
    <div>
      <Header />
      <Feed feedPics = {feedPics}/>
    </div>
  )
}

export default App
