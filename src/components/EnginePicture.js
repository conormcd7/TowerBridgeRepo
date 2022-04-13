import pic1 from './WalkwayPhotos/boilers.jpg';
import whiteBack from './WalkwayPhotos/whiteBack.png';
import waterGauges from './WalkwayPhotos/waterGauges.png';
import pressureReleaseValve from './WalkwayPhotos/pressureReleaseValve.png';
import pressureGuage from './WalkwayPhotos/pressureGuage.png';
import feedPump from './WalkwayPhotos/feedPump.png';import ReactPlayer from 'react-player'
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
  const buttonStyle3 = {  
    marginTop:"0px", 
    marginLeft:"0px", 
    backgroundColor:"transparent",
    color:"#ffffff",
    fontSize: '5px',
    width: "2%",
    height: "20%"
  };
  const buttonStyle4 = {  
    marginTop:"40px",
    marginLeft:"100px", 
    backgroundColor:"transparent",
    color:"#ffffff",
    fontSize: '5px',
    width: "2%",
    height: "15%"
  };
  const buttonStyle5 = {  
    marginBottom:"20px",
    marginLeft:"-0px", 
    backgroundColor:"transparent",
    color:"#ffffff",
    fontSize: '5px',
    width: "20%",
    height: "50%"
  };
  const buttonStyle6 = {  
    marginLeft:"40px",
    marginRight:"70px",
    marginBottom:"150px",  
    backgroundColor:"transparent",
    color:"#ffffff",
    fontSize: '5px',
    width: "20%",
    height: "20%"
  };
  const divStyle = {
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'contain',
    backgroundRepeat:"no-repeat",
    height: "300px",
    width: "100%"
  };

  export default class EnginePicture extends React.Component {
    state = {
        partsTitle: "Click on a part to see more information about it.",
        partsDesc: " ",
        partsImage: whiteBack
      }
    onClick1 = (e) => {
        this.setState({ partsImage: pressureGuage, partsTitle: "Pressure Gauge", partsDesc : "These show the current pressure of the steam in the boiler. Standard working pressure was 75 psi."} );
     }
     onClick0  = (e) => {
        this.setState({ partsImage: pressureReleaseValve, partsTitle: "Pressure Release Valve", partsDesc : "On top of boilers, these act similar to a pressure cooker. They released pressure periodically to maintain proper working pressure. Without these, the pressure could build up uncontrollably and cause an explosion." } );
     }
     onClick3  = (e) => {
        this.setState({ partsImage: waterGauges, partsTitle: "Water Gauges", partsDesc : "These glass cylinders measure the level of water in the boiler. If water falls below the brass bar, more water must be added to the boiler. "} );
     }
     onClick2  = (e) => {
        this.setState({ partsImage: feedPump, partsTitle: "Double Cylinder Feed Water Pump", partsDesc : "Takes in water from the Town water mains for use in the boiler. This machine used to be located in the cellar, and was manufactured by Clarke, Chapman & Co. LTD Gateshead. You can still view the manufacturer’s label on the cylinder."} );
     }
    
  render(){
    const {partsDesc} = this.state.partsDesc;
    
  return (
    
    <div className="Header"  >
        <center>
          <p style = {one}> 6.2</p>
          <p style = {mystyle}> Engine Room: Boiler Components</p>
          <div style={divStyle}>
          <Button style={buttonStyle4} onClick={this.onClick1}></Button>
          <Button style={buttonStyle3} onClick={this.onClick0}></Button>
          <p style = {one}></p>
          <Button style={buttonStyle5} onClick={this.onClick2}></Button>
          <Button style={buttonStyle6} onClick={this.onClick3}></Button>
          </div>
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b", fontSize: "20px" }}> {this.state.partsTitle}</p>
          <img src={this.state.partsImage} style={{width: "15%", height: "15%"}} alt="pic1" />
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b" }}> {this.state.partsDesc}</p>
          
          <Link to='/EngineIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/BasculeIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
         
        </center>
         
      </div>

  
  );
}
};
