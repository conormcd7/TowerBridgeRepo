import pic2 from './WalkwayPhotos/icon.png';
import pic1 from './BridgePhotos/TBridge.JPG';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function Introduction() {
    
  const mystyle = {
    color: "#2c368b",
    padding: "0px",
    fontSize: "30px",
    fontFamily: "Copperplate",
    textAlign: "center",
    
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
  marginTop:"60px", 
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
      
        <center>
        <div style = {divStyle}>
        <img src={pic2} style={iconStyle} alt="pic2" />
          <p style = {mystyle}> Tower Bridge: </p>
          <p style = {mystyle}> A Guided Tour</p>
         </div>
        
          <img src={pic1} style={mystyle5} alt="pic1" />
          <Link to='/Overview' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Begin Tour</Button>
          </Link>
        </center>
    </div>
  
  );
}

export default Introduction;

//<ReactPlayer
  //        className='react-player fixed-bottom'
    //      url= 'Animation.mp4'
      //    width='100%'
        //  height='25%'
          //controls = {true}
        ///>
