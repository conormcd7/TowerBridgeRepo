import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const TopFloor = () => {
    
  const buttonStyleText = {
    color:"#2c368b",
    borderColor:"#2c368b"
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
      
          <p style = {mystyle}> North Tower Level 4: Structure Animation</p>
          <ReactPlayer
          className='react-player fixed-bottom'
          url= 'Floor2.mp4'
          width='80%'
          height='25%'
          controls = {true}
          
          />
          
          <Link to='/TopFloorIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained">  <ArrowBackIosIcon /> Back  </Button>
          </Link>
          <Link to='/EastWalkwayIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          <p ></p>
          <Link to='/NorthTowerTopMore' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyleText} variant="outlined">Additional Information  </Button>
          </Link>
        </center>
         
      </div>
    </div>
  
  );
}

export default TopFloor;