import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
   apiKey: '634355dfeb784cb382cbfb139ca96581'
});

const particlesOptions = {
   particles: {
      number: {
         value: 30,
         density: {
            enable: true,
            value_area: 200
         }
      }
   }
};

class App extends Component {
   constructor() {
      super();
      this.state = {
         input: "",
         imageUrl: ''
      }
   }
   
   onInputChange = (event) => {
      this.setState({input: event.target.value});
   };
   
   onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      app.models
      .predict(
         Clarifai.FACE_DETECT_MODEL,
         this.state.input)
      .then(
         function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
         },
         function(err) {
            // there was an error
         }
      )
   };
   
   render() {
      return (
         <div className="App">
            <Particles className='particles'
               params={particlesOptions}
            />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm
               onInputChange={this.onInputChange}
               onButtonSubmit={this.onButtonSubmit}
             />
            <FaceRecognition imageUrl={this.state.imageUrl}/>
         </div>
      );
   }
}

export default App;
