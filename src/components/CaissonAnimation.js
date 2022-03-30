import pic1 from './BridgePhotos/TBridge.JPG';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';


const CaissonAnimation = () => {
    
  const mystyle = {
    color: "#1976d2",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "40px",
    font: "Josefin Sans",
    textAlign: "center"    
  };
  const subText = {
    color: "#43CFEE",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "35px",
    font: "Josefin Sans",
    textAlign: "center"    
  };
  const subText2 = {
    color: "#43CFEE",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "22px",
    font: "Josefin Sans",
    textAlign: "center",  
    width: "80%"
  };
  const buttonStyle = {
    marginTop:"40px",   
  };
  const buttonStyle2 = {
    marginTop:"40px",   
    marginRight:"5px",
  };
 
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
          <p style = {mystyle}> 1.2 North Tower Base Floor</p>
          <p style = {subText}> Caisson Animation</p>
          <ReactPlayer
          className='react-player fixed-bottom'
          url= 'Animation.mp4'
          width='100%'
          height='25%'
          playing = {true}
          loop = {true}
          />
          
          <Link to='/Page1' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained">Back  </Button>
          </Link>
          <Link to='/Pano' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <AnchorIcon /> </Button>
          </Link>
        </center>
         
      </div>
    </div>
  
  );
}

export default CaissonAnimation;