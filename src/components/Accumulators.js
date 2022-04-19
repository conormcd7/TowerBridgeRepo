import pic1 from './WalkwayPhotos/accumulators.png';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Accumulators() {
    const buttonStyleText = {
        color:"#2c368b",
    
    
      };
  const mystyle = {
    color: "#2c368b",
    padding: "0px",
    fontSize: "30px",
    fontFamily: "Copperplate",
    textAlign: "center",
    
  };
  const buttonStyle2 = {
    marginTop:"50px",   
    marginRight:"5px",
    backgroundColor:"#2c368b"
  };
  const one = {
    color: "#2c368b",
    marginTop:"25px", 
    padding: "0px",
    fontSize: "15px",
    fontFamily: "Copperplate",
    textAlign: "center"    
  };
  const mystyle2 = {
    backgroundColor: "#FFFFFF",
  };
  const mystyle3={
    backgroundColor: "#2c368b",
    height: 2,
    width: "65%"
}
const mystyle4 = {
  color: "#2c368b",
  fontSize: "25px",
  textAlign: "center",
  font: "Josefin Sans",
  padding: "0px",

  
};
const mystyle5 = {
  marginTop:"0px", 
  height:"20%", 
  width:"40%"

  
};
const buttonStyle = {
    marginTop:"50px",   
    backgroundColor:"#2c368b"
  };

  const divStyle = {
    position: "relative"
  };
 
  return (
    
    <div style = {mystyle2} className='Top'>
      
        
        <div style = {divStyle}>
        <center>
        <p style = {one}> E 7.2</p>
          <p style = {mystyle}> Engine Rooms: Accumulators</p>
          <img src={pic1} style={mystyle5} alt="pic1" />
          </center>
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b", paddingLeft: "50px", paddingRight: "50px"}}>  This is what the interior of an accumulator 
         roughly looked like. A piston attached to the accumulator was situated within a water pipe connected to the hydraulic water system. 
         When the force pumps pushed in water, it pushed that piston up continuously and generated the working pressure of 750 psi. 
         Below that is an image of a fully-raised accumulator with the interior water pipes exposed. Valves are used to control the 
         flow of the water into and out of the accumulators.

</p>
         <center>
         <Link to='/accumulatorsIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/BasculeIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          <p ></p>
          <Link to='/accumulatorsMore' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyleText} variant="text">See More  </Button>
          </Link>
        </center>
    </div>
  
  );
}

export default Accumulators;