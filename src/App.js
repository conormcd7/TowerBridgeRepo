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
import EngineRoom1 from './components/EngineRoom1';
import EngineRoom1Intro from './components/EngineRoom1Intro';
import PanoMore from './components/PanoMore';
import CoalIntro from './components/CoalIntro';
import EngineRoom2Intro from './components/EngineRoom2Intro';
import WaterTankForcePumpIntro from './components/WaterTankForcePumpIntro';
import ForcePumps from './components/ForcePumps';
import WaterTank from './components/WaterTank';
import EngineerWorkshopIntro from './components/EngineerWorkshopIntro';
import accumulatorsIntro from './components/accumulatorsIntro';
import Accumulators from './components/Accumulators';
import AccumulatorsMore from './components/AccumulatorsMore';
import BasculePicture from './components/BasculePicture';
import BasculeMore from './components/BasculeMore';
import End from './components/End';
import NorthTowerStairsMore from './components/NorthTowerStairsMore';
import NorthTowerTopMore from './components/NorthTowerTopMore';
import EastWalkwayMore from './components/EastWalkwayMore';

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
             <Route path="/EngineRoom1" component={EngineRoom1}/>
             <Route path="/EngineRoom1Intro" component={EngineRoom1Intro}/>
             <Route path="/PanoMore" component={PanoMore}/>
             <Route path="/CoalIntro" component={CoalIntro}/>
             <Route path="/EngineRoom2Intro" component={EngineRoom2Intro}/>
             <Route path="/WaterTankForcePumpIntro" component={WaterTankForcePumpIntro}/>
             <Route path="/ForcePumps" component={ForcePumps}/>
             <Route path="/WaterTank" component={WaterTank}/>
             <Route path="/EngineerWorkshopIntro" component={EngineerWorkshopIntro}/>
             <Route path="/accumulatorsIntro" component={accumulatorsIntro}/>
             <Route path="/Accumulators" component={Accumulators}/>
             <Route path="/AccumulatorsMore" component={AccumulatorsMore}/>
             <Route path="/BasculePicture" component={BasculePicture}/>
             <Route path="/BasculeMore" component={BasculeMore}/>
             <Route path="/End" component={End}/>
             <Route path="/NorthTowerStairsMore" component={NorthTowerStairsMore}/>
             <Route path="/NorthTowerTopMore" component={NorthTowerTopMore}/>
             <Route path="/EastWalkwayMore" component={EastWalkwayMore}/>
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
