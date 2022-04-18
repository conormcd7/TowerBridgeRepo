import pic2 from './WalkwayPhotos/icon.png';
import pic1 from './WalkwayPhotos/more1.png';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function CaissonAnimationMore() {
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
  marginTop:"160px", 
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
        <p style = {one}> B 1.21</p>
          <p style = {mystyle}> Caissons Diagram</p>
          <img src={pic1} style={mystyle5} alt="pic1" />
         </div>
        
         
          <Link to='/CaissonAnimation' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
        </center>
    </div>
  
  );
}

export default CaissonAnimationMore;