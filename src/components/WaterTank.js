import pic1 from './WalkwayPhotos/WaterTank.png';
import whiteBack from './WalkwayPhotos/whiteBack.png';
import noseBolts from './WalkwayPhotos/NoseBolts.png';
import waterTank from './WalkwayPhotos/WaterTankCr.png';
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
    marginTop: "27px",
    marginRight: "150px",
    backgroundColor:"transparent",
    width: "15%",
    height: "50px",
    padding:"0px",
    border: "0px",
  };
  const buttonStyle5 = {  
    marginTop: "40px",
    backgroundColor:"transparent",
    marginRight: "100px",
    width: "15%",
    height: "50px",
  padding:"0px",
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

  export default class WaterTank extends React.Component {
    state = {
        partsTitle: "Click on a part to see more information about it.",
        partsDesc: " ",
        partsImage: whiteBack,
        imageHeight: "1%"
      }
    onClick1 = (e) => {
        this.setState({  imageHeight: "40%", partsImage: noseBolts,  partsTitle: "Nose Bolts", partsDesc : "These bolts are part of a locking mechanism to prevent the bridge from shifting as traffic crosses it. After a bridge lift is complete and the bascules have fully lowered, these bolts shoot across to connect the two bascules together from below. This original nose bolt was removed and replaced by new ones when the electric hydraulic system was installed."} );
     }
     onClick2  = (e) => {
        this.setState({  imageHeight: "40%", partsImage: waterTank, partsTitle: "Town Mains Water Tank", partsDesc : "Water for the hydraulic lift system which powered the bascules is stored in these tanks. When required, it is drawn into the force pumps. However, most water is stored in the pipework, which itself could store 32 tons of water. This tank was merely just for bleed."} );
     }
   
  render(){
    const {partsDesc} = this.state.partsDesc;
    const {imageHeight} = this.state.imageHeight;
  return (
    
    <div className="Header"  >
        <center>
          <p style = {one}> E 5.3</p>
          <p style = {mystyle}> Engine Rooms: Water Tank</p>
          <div style={divStyle}>
         
          <button style={buttonStyle7} onClick={this.onClick1}></button>
          <button style={buttonStyle5} onClick={this.onClick2}></button>
        
         
          </div>
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b", fontSize: "20px" }}> {this.state.partsTitle}</p>
          <img src={this.state.partsImage} style={{width: this.state.imageHeight}} alt="pic1" />
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b" }}> {this.state.partsDesc}</p>
          
          <Link to='/ForcePumps' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/EngineerWorkshopIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
         
        </center>
         
      </div>

  
  );
}
};
