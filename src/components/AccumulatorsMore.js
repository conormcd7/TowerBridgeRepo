import pic1 from './WalkwayPhotos/AccumMore.png';
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

const mystyle5 = {
  marginTop:"0px", 
  height:"20%", 
  width:"90%"

  
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
        <p style = {one}> E 7.12</p>
          <p style = {mystyle}> Engine Rooms: Accumulators</p>
          <img src={pic1} style={mystyle5} alt="pic1" />
          </center>
         </div>
        

         <center>
          
         <Link to='/Accumulators' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
        </center>
    </div>
  
  );
}

export default Accumulators;