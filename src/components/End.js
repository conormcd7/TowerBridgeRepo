import pic2 from './WalkwayPhotos/icon.png';
import pic1 from './BridgePhotos/TBridge.JPG';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function End() {
    
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
 
const mystyle5 = {
  marginTop:"0px", 
  height:"100%", 
  width:"100%"

  
};
const buttonStyle = {
  marginTop:"260px", 
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
          <p style = {mystyle}> End of Tour </p>
          <p style = {mystyle}> Thank You!</p>
         </div>
        
    
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained"> Restart</Button>
          </Link>
        </center>
    </div>
  
  );
}

export default End;