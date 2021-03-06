import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BridgeAnimation = () => {
    
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
        <p style = {one}> B 2.21</p>
          <p style = {mystyle}> North Tower Stairs: Structure Animation</p>
          <ReactPlayer
          className='react-player fixed-bottom'
          url= 'Stairs2.mp4'
          width='80%'
          height='25%'
          controls = {true}
          
          />
          
          <Link to='/BridgeAnimationIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained">  <ArrowBackIosIcon /> Back  </Button>
          </Link>
          <Link to='/TopFloorIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          <p ></p>
          <Link to='/NorthTowerStairsMore' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyleText} variant="text">See More  </Button>
          </Link>
        </center>
         
      </div>
    </div>
  
  );
}

export default BridgeAnimation;