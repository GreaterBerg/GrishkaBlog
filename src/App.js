import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogBlock from './components/blog_block/BlogBlock';

import spiderman from './video_2025-05-17_20-04-34.mp4';
import moneyguy from './8979097226ecf3d04cee34438ffc48f5.jpg';

import angelinka from './angelinka.mp4';
import angelinkaPoster from './photo_2025-05-22_15-00-16.jpg';

import danachi from './IMG_1041.MP4';
import danachiPoster from './photo_2025-05-22_15-00-22.jpg';

import emma from './emma.mp4';
import emmaPoster from './photo_2025-05-22_15-00-15.jpg';

import temik from './temik.MP4';
import temikPoster from './photo_2025-05-22_15-02-13.jpg';

import madin from './madik.mp4';
import madinPoster from './photo_2025-05-22_15-00-34.jpg';

import abrek from './abrek.mp4';
import abrekPoster from './photo_2025-05-22_15-00-23.jpg';

import azak from './azak.MP4';
import azakPoster from './photo_2025-05-22_15-00-17.jpg';

import azac from './azac.MP4';
import azacPoster from './photo_2025-05-22_15-00-20.jpg';

import amik from './amir.mp4';
import amikPoster from './photo_2025-05-22_15-00-31.jpg';

import danam from './makayo.mp4';
import danamPoster from './photo_2025-05-22_15-09-53.jpg';

import kantik from './kantik.mp4';
import kantikPoster from './photo_2025-05-22_15-00-36.jpg';

import madina from './madina.MP4';
import madinaPoster from './photo_2025-05-22_15-00-29.jpg';

import milana from './milana.mp4';
import milanaPoster from './photo_2025-05-22_15-09-54.jpg';

import sveta from './sveta.mp4';
import svetaPoster from './photo_2025-05-22_15-00-28.jpg';

import temir from './temir.mp4';
import temirPoster from './photo_2025-05-22_15-00-24.jpg';

import shamil from './shamil (2).MP4';
import shamilPoster from './photo_2025-05-22_15-00-33.jpg';

import baslan from './5943485289260565981.mp4';
import baslanPoster from './IMG_1051.jpeg';

import elpana from './2132940330699290682.mp4';
import ellanaPoster from './IMG_1052.jpeg';

import kastokov from './-2238492891504237733.mp4';
import kastokovPoster from './IMG_1050.jpeg';

function App() {
  return (
    <div>
      <video class="Amik" controls poster={angelinkaPoster} playsinline>
      <source src={angelinka} type="video/mp4"/>
     </video>
    
      <video class="Amik" controls poster={danachiPoster} playsinline>
      <source src={danachi} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={emmaPoster} playsinline>
      <source src={emma} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={temikPoster} playsinline>
      <source src={temik} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={madinPoster} playsinline>
      <source src={madin} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={abrekPoster} playsinline>
      <source src={abrek} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={azakPoster} playsinline>
      <source src={azak} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={azacPoster} playsinline>
      <source src={azac} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={amikPoster} playsinline>
      <source src={amik} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={danamPoster} playsinline>
      <source src={danam} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={kantikPoster} playsinline>
      <source src={kantik} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={madinaPoster} playsinline>
      <source src={madina} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={milanaPoster} playsinline>
      <source src={milana} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={svetaPoster} playsinline>
      <source src={sveta} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={temirPoster} playsinline>
      <source src={temir} type="video/mp4"/>
     </video>

    <video class="Amik" controls poster={baslanPoster} playsinline>
      <source src={baslan} type="video/mp4"/>
     </video>
    
    <video class="Amik" controls poster={ellanaPoster} playsinline>
      <source src={ellana} type="video/mp4"/>
     </video>
    
    <video class="Amik" controls poster={kastokovPoster} playsinline>
      <source src={kastokov} type="video/mp4"/>
     </video>
    
    <video class="Amik" controls poster={shamilPoster} playsinline>
      <source src={shamil} type="video/mp4"/>
     </video>
    </div>
  );
}

export default App;