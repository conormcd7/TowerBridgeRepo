import pic1 from './WalkwayPhotos/basculePic.png';
import whiteBack from './WalkwayPhotos/whiteBack.png';
import cog from './WalkwayPhotos/cog.png';
import brakeSystem from './WalkwayPhotos/brakeSystem.png';
import Button from '@mui/material/Button';
import React from 'react'
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const buttonStyleText = {
    color:"#2c368b",
  };
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
    marginTop: "20px",
    marginRight: "0px",
    backgroundColor:"transparent",
    width: "15%",
    height: "50px",
    padding:"0px",
    border: "0px",
  };
  const buttonStyle5 = {  
    marginTop: "115px",
    backgroundColor:"transparent",
    marginRight: "110px",
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

  export default class BasculePicture extends React.Component {
    state = {
        partsTitle: "Click on a part to see more information about it.",
        partsDesc: " ",
        partsImage: whiteBack,
        imageSize: "1%",

      }
    onClick1 = (e) => {
        this.setState({ imageSize: "80%", partsImage: cog,  partsTitle: "Cog", partsDesc : "Also known as a Rack & Pinion Wheel, these gears made the bascules are moved. The pinion wheel is attached to the pinion shaft, which is rotated by the drive engines. The pinion wheels rotated at 30 RPM whereas the bascules rotated at 5 RPM (a 6:1 reduction). "} );
     }
     onClick2  = (e) => {
        this.setState({ imageSize: "80%", partsImage: brakeSystem, partsTitle: "BrakeSystem", partsDesc : "This is the caliper braking system for the pinion wheels - it acts very similar to the breaks of a bicycle. They could be manually engaged during a lift if necessary to prevent the bascules from crashing down - the counterweight at left would pull the two sides together and prevent the wheel from rotating. The breaks were engaged at all times except when the bascules were actively being moved. Watch the animation below to see how the braking system operated."} );
     }
   
  render(){
    const {partsDesc} = this.state.partsDesc;
    const {imageSize} = this.state.imageSize;
  return (
    
    <div className="Header"  >
        <center>
          <p style = {one}> E 8.31</p>
          <p style = {mystyle}> Engine Room: Bascule Drive Engines Parts</p>
          <div style={divStyle}>
         
          <button style={buttonStyle7} onClick={this.onClick1}></button>
          <button style={buttonStyle5} onClick={this.onClick2}></button>
        
         
          </div>
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b", fontSize: "20px" }}> {this.state.partsTitle}</p>
          <img src={this.state.partsImage} style={{width: this.state.imageSize}} alt="pic1" />
          <p style = {{width: "80%", fontFamily: "EuphemiaUCAS", color: "#2c368b" }}> {this.state.partsDesc}</p>
          
          <Link to='/Bascule' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/End' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          <p ></p>
          <Link to='/BasculeMore' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyleText} variant="text">See More  </Button>
          </Link>
        </center>
         
      </div>

  
  );
}
};