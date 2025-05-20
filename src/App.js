import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogBlock from './components/blog_block/BlogBlock';

import spiderman from './video_2025-05-17_20-04-34.mp4';
import moneyguy from './8979097226ecf3d04cee34438ffc48f5.jpg';

import angelinka from './angelinka.mp4';
import angelinkaPoster from './ангелинкагелик.png';



function App() {
  return (
    <div>
      <video class="Amik" preload="auto" controls poster={angelinkaPoster}>
      <source src={angelinka} type="video/mp4"/>
     </video>
      <video class="Amik" preload="auto" controls poster={moneyguy}>
      <source src={spiderman} type="video/mp4"/>
     </video>
    </div>
  );
}

export default App;
