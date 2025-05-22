import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogBlock from './components/blog_block/BlogBlock';

import spiderman from './video_2025-05-17_20-04-34.mp4';
import moneyguy from './8979097226ecf3d04cee34438ffc48f5.jpg';

import angelinka from './angelinka.mp4';
import angelinkaPoster from './ангелинкагелик.png';

import danachi from './IMG_1041.MP4';
import danachiPoster from './ангелинкагелик.png';

import emma from './emma.mp4';
import emmaPoster from './ангелинкагелик.png';

import temik from './temik.MP4';
import temikPoster from './ангелинкагелик.png';

import madin from './madik.mp4';
import madinPoster from './ангелинкагелик.png';

import abrek from './abrek.MOV';
import abrekPoster from './ангелинкагелик.png';

import azak from './azak.MP4';
import azakPoster from './ангелинкагелик.png';

import azac from './azac.MP4';
import azacPoster from './ангелинкагелик.png';

import amik from './amir.mp4';
import amikPoster from './ангелинкагелик.png';

import danam from './makayo.MOV';
import danamPoster from './ангелинкагелик.png';

import kantik from './kantik.mp4';
import kantikPoster from './ангелинкагелик.png';

import madina from './madina.MP4';
import madinaPoster from './ангелинкагелик.png';

import milana from './milana.MOV';
import milanaPoster from './ангелинкагелик.png';

import sveta from './sveta.MOV';
import svetaPoster from './ангелинкагелик.png';

import temir from './temir.MOV';
import temirPoster from './ангелинкагелик.png';

import shamil from './shamil (2).MP4';
import shamilPoster from './ангелинкагелик.png';


function App() {
  return (
    <div>
      <video class="Amik" controls poster={angelinkaPoster}>
      <source src={angelinka} type="video/mp4"/>
     </video>
    
    <div>
      <video class="Amik" controls poster={angelinkaPoster}>
      <source src={danachi} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={emma} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={temik} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={madin} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={abrek} type="video/mov"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={azak} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={azac} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={amik} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={danam} type="video/mov"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={kantik} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={madina} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={milana} type="video/mov"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={sveta} type="video/mov"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={temir} type="video/mov"/>
     </video>

    <video class="Amik" controls poster={angelinkaPoster}>
      <source src={shamil} type="video/mp4"/>
     </video>
    </div>
  );
}

export default App;
