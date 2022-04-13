import pic1 from './BridgePhotos/TBridge.JPG';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Bascule = () => {
    
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
    backgroundColor:"#2c368b"
  };
  const buttonStyle2 = {
    marginTop:"100px",   
    marginRight:"5px",
    backgroundColor:"#2c368b"
  };
 
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
        <p style = {one}> 7.2</p>
          <p style = {mystyle}> Engine Room: Bascule Drive Engines Animation</p>
          <ReactPlayer
          className='react-player fixed-bottom'
          url= 'Bascule.mp4'
          width='80%'
          height='25%'
          controls = {true}
          
          />
          
          <Link to='/BasculeIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained">  <ArrowBackIosIcon /> Back  </Button>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
        </center>
         
      </div>
    </div>
  
  );
}

export default Bascule;