import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function NorthTowerStairsMore() {
    const buttonStyleText = {
        color:"#2c368b",
    
    
      };
  const mystyle = {
    color: "#2c368b",
    padding: "0px",
    fontSize: "30px",
    fontFamily: "Copperplate",
    textAlign: "center",
    width: "80%"
    
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
    textAlign: "center",
    width: "80%"    
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
      
        <p style = {one}> B 2.22</p>
          <p style = {mystyle}> North Tower Stairs: Structure </p>

          
         </div>
        
         <p style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b",  width: "80%"}}> The tensile strenght of the steel used to contrsut Tower Bridge is 27-32 tons per square inch or 4170-4942 bars. There are four octagonal columns per tower each resting on a bad of granite stone. Each column is 120 feet or 36.5 meters tall. They are each 5 foot 6 inches or 1.68 meters in diameter. 
 


</p>
       
         <Link to='/BridgeAnimation' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
       
    </div>
    </center>
  );
}

export default NorthTowerStairsMore;