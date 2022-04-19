import pic1 from './WalkwayPhotos/CYard.png';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function BasculeMore() {
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
  width:"80%"

  
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
        <p style = {one}> E 8.32</p>
          <p style = {mystyle}> Engine Rooms: C Yard Button</p>
          <img src={pic1} style={mystyle5} alt="pic1" />
          </center>
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b", paddingLeft: "50px", paddingRight: "50px"}}> This is the original location of the 3rd Steam engine, which was installed in 1941. It was a different model than the original two engines; it is a Horizontal Cross Compound Hydraulic Pumping Engine built by Vickers Armstrong Ltd. It was decommissioned and sold to the Forncett Industrial Steam Museum in 1974, where it is on display. The funding from this sale helped to open the Tower Bridge Exhibition in 1982. Image from Forncett Industrial Steam Museum. 


</p>
         <center>
         <Link to='/BasculePicture' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
        </center>
    </div>
  
  );
}

export default BasculeMore;