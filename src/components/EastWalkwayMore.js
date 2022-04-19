import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function EastWalkwayMore() {
    
  const mystyle = {
    color: "#2c368b",
    padding: "0px",
    fontSize: "30px",
    fontFamily: "Copperplate",
    textAlign: "center",
    width:"80%"
    
  };
  
  const one = {
    color: "#2c368b",
    marginTop:"25px", 
    padding: "0px",
    fontSize: "15px",
    fontFamily: "Copperplate",
    textAlign: "center",
    width:"80%"   
  };
  const mystyle2 = {
    backgroundColor: "#FFFFFF",
  };

const buttonStyle = {
    marginTop:"50px",   
    backgroundColor:"#2c368b"
  };

  const divStyle = {
    position: "relative"
  };
 
  return (
    <center>
    <div style = {mystyle2} className='Top'>
      
      
        <div style = {divStyle}>
        
        <p style = {one}> B 4.22</p>
          <p style = {mystyle}> East Walkway: Structure </p>

         
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b",  width:"80%"}}> The walkways are 110 feet of 33.53 meters above the roadway. They are 230 feet long or 70.1 meters long.
 
 


</p>
     
         <Link to='/EastWalkway' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
        
    </div>
    </center>
  
  );
}

export default EastWalkwayMore;