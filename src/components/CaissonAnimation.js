import pic1 from './BridgePhotos/TBridge.JPG';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';


const CaissonAnimation = () => {
    
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
    marginTop:"100px",   
  };
  const buttonStyle2 = {
    marginTop:"100px",   
    marginRight:"5px",
  };
 
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
        <p style = {one}> 1.2</p>
          <p style = {mystyle}> North Tower Base Floor: Caisson Animation</p>
          <ReactPlayer
          className='react-player fixed-bottom'
          url= 'Animation.mp4'
          width='80%'
          height='25%'
          controls = {true}
          
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