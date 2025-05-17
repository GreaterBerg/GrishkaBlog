import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogBlock from './components/blog_block/BlogBlock';
import Amik from './photo_2025-05-07_21-50-13.jpg';
import bururki from './photo_2025-05-07_22-22-22.jpg';
import gumiki from './photo_2025-05-07_22-22-26.jpg';
import temir from './photo_2025-05-07_22-22-38.jpg';
import temik from './photo_2025-05-07_22-22-23.jpg';
import irina from './photo_2025-05-07_22-22-18.jpg';
import temir2 from './photo_2025-04-13_20-32-33.png';
import zombieferma from './photo_2025-05-12_22-44-45.jpg';
import spiderVideo from './video_2025-05-17_20-04-34.mp4';



function App() {
  return (
    <div>
      <img src={zombieferma} alt="Amik" class="Amik"/>
      <img src={Amik} alt="Amik" class="Amik"/>
      <img src={bururki} alt="Amik" class="Amik"/>
      <img src={gumiki} alt="Amik" class="Amik"/>
      <img src={temir} alt="Amik" class="Amik"/>
      <img src={temik} alt="Amik" class="Amik"/>
      <img src={irina} alt="Amik" class="Amik"/>
      <img src={temir2} alt="Amik" class="Amik"/>
      <div class="video">
        <video loop autoplay muted width="70%" preload="auto" class="Amik">
            <source src={spiderVideo} type="video/mp4">
            bobrik
        </video>
    </div>
    </div>
    
  );
}

export default App;
