import pic1 from './WalkwayPhotos/EngineRoom1.png';
import whiteBack from './WalkwayPhotos/whiteBack.png';
import flyWheel from './WalkwayPhotos/flyWheel.png';
import steamGov from './WalkwayPhotos/steamGov.png';
import counter from './WalkwayPhotos/counter.png';
import rightCrankPin from './WalkwayPhotos/rightCrankPin.png';
import leftCrankPin from './WalkwayPhotos/leftCrankPin.png';
import pressureCylinders from './WalkwayPhotos/pressureCylinders.png';
import canisters from './WalkwayPhotos/canisters.png';
import label from './WalkwayPhotos/label.png';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react'
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { LineWeight } from '@mui/icons-material';

    
  const one = {
    color: "#2c368b",
    marginTop:"25px", 
    padding: "0px",
    fontSize: "15px",
    fontFamily: "Copperplate",
    textAlign: "center"    
  };
  const mystyle = {
    color: "#2c368b",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "30px",
    width: "80%",
    fontFamily: "Copperplate",
    textAlign: "center"    
  };
  const buttonStyle = {
    marginTop:"50px", 
    backgroundColor:"#2c368b"  
  };
  const buttonStyle2 = {
    marginTop:"50px",   
    marginRight:"5px",
    backgroundColor:"#2c368b"
  };
 
 




  const buttonStyle7 = {  
    marginTop: "47px",
    marginLeft: "140px",
    backgroundColor:"transparent",
    width: "5%",
    height: "13px",
    padding:"0px",
    border: "0px",
  };
  const buttonStyle5 = {  
    marginTop: "0px",
    backgroundColor:"transparent",
    marginLeft: "300px",
    width: "5%",
    height: "13px",
  padding:"0px",
  border: "0px",
  };
  const buttonStyle3 = {  
    marginTop: "0px",
    backgroundColor:"transparent",
    width: "5%",
    padding:"0px",
    height: "13px",
    border: "0px",
  };
  const buttonStyle4 = {  
    marginTop: "5px",
    marginLeft: "185px",
    backgroundColor:"transparent",
    width: "5%",
    padding:"0px",
    height: "13px",
    border: "0px",
  };
  const buttonStyle6 = {  
    marginTop: "0px",
    marginLeft: "45px",
    backgroundColor:"transparent",
    width: "5%",
    padding:"0px",
    height: "13px",
    border: "0px",
  };
  const buttonStyle8 = {  
    marginTop: "0px",
    marginRight: "150px",
    backgroundColor:"transparent",
    width: "5%",
    padding:"0px",
    height: "13px",
    border: "0px",
  };
  const buttonStyle9 = {  
    marginTop: "0px",
    marginRight: "0px",
    backgroundColor:"transparent",
    width: "5%",
    padding:"0px",
    height: "13px",
    border: "0px",
  };
  const buttonStyle10 = {  
    marginTop: "10px",
    marginRight: "75px",
    backgroundColor:"transparent",
    width: "5%",
    padding:"0px",
    height: "13px",
    border: "0px",
  };








  
  const divStyle = {
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'contain',
    backgroundRepeat:"no-repeat",
    height: "300px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    
  };

  export default class EngineRoom1 extends React.Component {
    state = {
        partsTitle: "Click on a part to see more information about it.",
        partsDesc: " ",
        partsImage: whiteBack
      }
    onClick1 = (e) => {
        this.setState({ partsImage: flyWheel, partsTitle: "Fly Wheel", partsDesc : "A massive, heavy wheel used in machinery to help the machine gain momentum and store more energy. In this application, it helped to regulate the motion of the pistons and crank pins, so they don’t move too fast. This wheel rotated at 15-18 rotations per minute (RPM)  at 360 horsepower."} );
     }
     onClick2  = (e) => {
        this.setState({ partsImage: counter, partsTitle: "Rotation Counter", partsDesc : "Counts the number of rotations of the flywheel via a mechanical system. It has been reset multiple times - whenever the wheel reaches 9,999,999 rotations! This counter is titled a Harding’s Improved Counter, an established name in counters which specifically measure the number of rotations of wheels and pistons in stationary steam engines."} );
     }
     onClick3  = (e) => {
        this.setState({ partsImage: steamGov, partsTitle: "SteamGovernor", partsDesc : "A mechanism that controls the speed of the engines by regulating the flow of steam. It acts as a safety feature that controls the speed of the flywheel. If the flywheel rotates too fast, centrifugal force drives the rods out and down which closes the steam valve and shuts the engine down." } );
     }
     onClick4  = (e) => {
        this.setState({ partsImage: rightCrankPin, partsTitle: "Right Crank Pin", partsDesc : "Similar to the left crank pin, this pin operates both a piston and a machine in the cellar, in this case the circulating pump. This pump pulled river water into a reservoir below the south abutment at high tide to cool the steam in the condenser. Condensed water was returned to the boilers for reuse, and the water in the reservoir was flushed out at low tide."} );
     }
     onClick5  = (e) => {
        this.setState({ partsImage: leftCrankPin, partsTitle: "Left Crank Pin", partsDesc : "This pin operates one piston and is also connected to the air pump, which pulls steam down out of the low-pressure cylinders en route to the condenser. Both of these components are in the cellar."} );
     }
     onClick6  = (e) => {
        this.setState({ partsImage: pressureCylinders, partsTitle: "Pressure Cylinders", partsDesc : "Steam is pumped into the smaller cylinder, the High Pressure cylinder, which pushes the plate on the piston to move the system back and forth. Steam moves into the Low pressure cylinder (LP) - the bigger cylinder - to use the energy of the steam twice in the piston again. You will get a better view of these as you move through the engine rooms."} );
     }
     onClick7  = (e) => {
        this.setState({ partsImage: canisters, partsTitle: "Self-oiling Canisters", partsDesc : "These glass jars are filled with oil to automatically oil each component - they may have been filled with whale oil during original operation.These are still functional today and continue to lubricate the components during the electric operation. The engines are still operated today to prevent the components from siezing up and never moving again."} );
     }
     onClick8  = (e) => {
        this.setState({ partsImage: label, partsTitle: "Manufacturer's Label and Paint", partsDesc : "This is the manufacturer’s label of Sir William Armstrong. It has been removed from the second engine, so this is the last one that remains. The engines are continually repainted to their original colors to preserve their historic beauty and to prevent rusting. The green, red, and black color scheme matches that of Armstrong’s family crest."} );
     }
    
  render(){
    const {partsDesc} = this.state.partsDesc;
    
  return (
    
    <div className="Header"  >
        <center>
          <p style = {one}> E 3.2</p>
          <p style = {mystyle}> Engine Rooms: 1st Engine Components</p>
          <div style={divStyle}>
         
          <button style={buttonStyle7} onClick={this.onClick1}></button>
          <button style={buttonStyle5} onClick={this.onClick2}></button>
          <button style={buttonStyle3} onClick={this.onClick3}></button>
          <button style={buttonStyle4} onClick={this.onClick4}></button>
          <button style={buttonStyle6} onClick={this.onClick5}></button>
          <button style={buttonStyle8} onClick={this.onClick6}></button>
          <button style={buttonStyle9} onClick={this.onClick7}></button>
          <button style={buttonStyle10} onClick={this.onClick8}></button>
         
          </div>
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b", fontSize: "20px" }}> {this.state.partsTitle}</p>
          <img src={this.state.partsImage} style={{width: "35%", height: "35%"}} alt="pic1" />
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b" }}> {this.state.partsDesc}</p>
          
          <Link to='/EngineRoom1Intro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/EngineRoom2Intro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
         
        </center>
         
      </div>

  
  );
}
};
