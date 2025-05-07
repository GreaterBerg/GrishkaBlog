import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogBlock from './components/blog_block/BlogBlock';
import Amik from './photo_2025-05-07_21-50-13.jpg'


function App() {
  return (
    <div>
      <img src="{Amik}" alt="Amik"/>
    </div>
    
  );
}

export default App;
