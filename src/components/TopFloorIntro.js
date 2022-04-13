import pic1 from './BridgePhotos/TBridge.JPG';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const TopFloorIntro = () => {
    
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
  const subText = {
    color: "#2c368b",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "25px",
    fontFamily: "Copperplate",
    textAlign: "center"    
  };
  const subText2 = {
    color: "#1976d2",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "15px",
    fontFamily: "Josefin Sans",
    textAlign: "center",  
    width: "80%"
  };
  const buttonStyle = {
    marginTop:"250px",   
    backgroundColor:"#2c368b"
  };
  const buttonStyle2 = {
    marginTop:"250px",   
    marginRight:"5px",
    backgroundColor:"#2c368b"
  };

 
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
          <p style = {one}> 3.1</p>
          <p style = {mystyle}> North Tower Top Floor: Structure</p>
          <Accordion style = {{marginTop: "50px", width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Directions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b" }}>
          Listen to the Welcome Host explain the history of Tower Bridge along with the accompanying video. 
          Then watch the animation continue on the next page to learn how the bridge is supported by the North and South Towers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Context</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          The top level of the North Tower contains additional information about the history of Tower Bridge.
           It is also where the chains supporting the bridge deck connect to the North Tower. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          <Link to='/BridgeAnimation' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/TopFloor' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          
        </center>
         
      </div>
    </div>
  
  );
}

export default TopFloorIntro;