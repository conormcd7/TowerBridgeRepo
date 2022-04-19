import pic2 from './WalkwayPhotos/ForcePumps.png';
import pic1 from './WalkwayPhotos/ForcePumps.png';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ForcePumps() {
    
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
  height:"100%", 
  width:"100%"

  
};
const buttonStyle = {
    marginTop:"50px",   
    backgroundColor:"#2c368b"
  };
const iconStyle = {
    marginTop:"30px",
    height:"50px",   
    width:"50px", 
  };
  const divStyle = {
    position: "relative"
  };
 
  return (
    
    <div style = {mystyle2} className='Top'>
      
        
        <div style = {divStyle}>
        <center>
        <p style = {one}> E 5.2</p>
          <p style = {mystyle}> Engine Rooms: Force Pumps</p>
          <img src={pic1} style={mystyle5} alt="pic1" />
          </center>
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b", paddingLeft: "50px", paddingRight: "50px"}}>  These pumps are 
         known as the heart of the bridge. As the pistons move back and forth, they pull water from the Town Mains Water Tank and 
         push into the hydraulic circuit. This in turn raises the accumulators (seen later); these pumps could lift one accumulator 
         every 67 seconds (a total of 15 minutes to raise all 6 accumulators)
</p>
         <center>
         <Link to='/WaterTankForcePumpIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/WaterTank' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
        </center>
    </div>
  
  );
}

export default ForcePumps;