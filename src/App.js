import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Introduction from './components/Introduction';
import Page1 from './components/Page1';
import CaissonAnimation from './components/CaissonAnimation';
import CaissonAnimationMore from './components/CaissonAnimationMore';
import Pano from './components/Pano';
import Pano2 from './components/Pano2';
import PanoIntro from './components/PanoIntro';
import BridgeAnimation from './components/BridgeAnimation';
import BridgeAnimationIntro from './components/BridgeAnimationIntro';
import EngineIntro from './components/EngineIntro';
import EnginePicture from './components/EnginePicture';
import Overview from './components/Overview';
import TopFloor from './components/TopFloor';
import TopFloorIntro from './components/TopFloorIntro';
import EastWalkway from './components/EastWalkway';
import EastWalkwayIntro from './components/EastWalkwayIntro';
import Bascule from './components/Bascule';
import BasculeIntro from './components/BasculeIntro';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Introduction} exact/>
             <Route path="/Page1" component={Page1}/>
             <Route path="/CaissonAnimation" component={CaissonAnimation}/>
             <Route path="/CaissonAnimationMore" component={CaissonAnimationMore}/>
             <Route path="/Pano" component={Pano}/>
             <Route path="/Pano2" component={Pano2}/>
             <Route path="/PanoIntro" component={PanoIntro}/>
             <Route path="/BridgeAnimation" component={BridgeAnimation}/>
             <Route path="/BridgeAnimationIntro" component={BridgeAnimationIntro}/>
             <Route path="/EngineIntro" component={EngineIntro}/>
             <Route path="/EnginePicture" component={EnginePicture}/>
             <Route path="/Overview" component={Overview}/>
             <Route path="/TopFloor" component={TopFloor}/>
             <Route path="/TopFloorIntro" component={TopFloorIntro}/>
             <Route path="/EastWalkway" component={EastWalkway}/>
             <Route path="/EastWalkwayIntro" component={EastWalkwayIntro}/>
             <Route path="/Bascule" component={Bascule}/>
             <Route path="/BasculeIntro" component={BasculeIntro}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

//<ReactPlayer
  //        className='react-player fixed-bottom'
    //      url= 'Animation.mp4'
      //    width='100%'
        //  height='25%'
          //controls = {true}
        ///>
