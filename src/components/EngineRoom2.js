
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function EngineRoom2() {
 
  const mystyle = {
    color: "#2c368b",
    padding: "0px",
    width: "80%",
    fontSize: "30px",
    fontFamily: "Copperplate",
    textAlign: "center",
    
  };
  const buttonStyle2 = {
    marginTop:"50px",   
    marginRight:"5px",
    backgroundColor:"#2c368b"
  };
 
  const mystyle2 = {
    backgroundColor: "#FFFFFF",
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
      
          <p style = {mystyle}> Engine Rooms: B Engine</p>
          
          </center>
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b", paddingLeft: "50px", paddingRight: "50px"}}>  Workers in these rooms likely preferred this 
          job over the boiler rooms for many reasons.
          It was cleaner to work in here, and cooler as well. It wasn’t nearly as rancid smelling - 
          some even described the rooms as sweet-smelling from the oil due to the stark contrast from the coal burning. 

</p>
         <center>
         <Link to='/EngineRoom2Intro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/WaterTankForcePumpIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          
        </center>
    </div>
  
  );
}

export default EngineRoom2;