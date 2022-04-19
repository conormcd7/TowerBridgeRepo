import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function NorthTowerTopMore() {
    const buttonStyleText = {
        color:"#2c368b",
    
    
      };
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
    <center>
    <div style = {mystyle2} className='Top'>
      
        
        <div style = {divStyle}>
        
        <p style = {one}> B 3.22</p>
          <p style = {mystyle}> North Tower Top Floor: Structure </p>

         
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b", width:"80%"}}> The length of 1 chain betweem the tower and the abutment is 380 feet or 115.82 meters. The rods suspending the bridge deck from the chains are 5.5 to 6 inches in diameter or 14-15 centimeters. The chains weigh 1 ton per foot or 1 ton per 30 centimeters. The rollers support a fully ladent weight of 1,000 tons.
 
 


</p>
        
         <Link to='/TopFloor' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
      
    </div>
  </center>
  );
}

export default NorthTowerTopMore;