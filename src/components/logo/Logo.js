import React from 'react';
import Tilt from "react-tilt/dist/tilt";
import brain from './brain.png';
import './logo.css';

const Logo = () => {
   return (
      <div className='ma4 mt0'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner p3">
               <img src={brain} style={{paddingTop: '5px'}} alt="logo of the app"/>
            </div>
         </Tilt>
      </div>
   )
}

export default Logo;