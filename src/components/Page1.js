import pic1 from './BridgePhotos/TBridge.JPG';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


const Page1 = () => {
    
  const mystyle = {
    color: "#1976d2",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "30px",
    font: "Josefin Sans",
    textAlign: "center"    
  };
  const buttonStyle = {
    marginTop:"20px",   
  };

 
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
          <h1 style = {mystyle}> We out here getting it done</h1>
          <Link to='/'>
            <Button style={buttonStyle} variant="contained">End of the Tour</Button>
          </Link>
        </center>
         
      </div>
    </div>
  
  );
}

export default Page1;