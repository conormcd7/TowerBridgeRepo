import pic2 from './WalkwayPhotos/icon.png';
import pic1 from './WalkwayPhotos/more1.png';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'


function PanoMore() {
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
  marginTop:"50px", 
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
        <p style = {one}> B 5.22</p>
          <p style = {mystyle}> Building Information</p>
          <Accordion style = {{marginTop: "50px", width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>City Hall</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style = {{fontFamily: "EuphemiaUCAS", color: "#2c368b" }}>
          Completed in July of 2002. Former location of the Greater London Authority until they moved to the “Crystal” in the Royal Victoria Docks in late 2021.
 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>The Shard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          Completed in 2013, it is the tallest building in London with 95% of the building being owned by the State of Qatar.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>London Bridge</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          The version that is standing today was completed in 1973. 
          The previous bridge was sold to American entrepreneur Robert 
          McCholluch who thought he was buying Tower Bridge and had it moved to Lake Havasu, Arizona, USA.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Fenchurch Building - Walkie Talkie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          20 Fenchurch Street, also known as the “Walkie Talkie," started construction in 2009 and was completed in 2014. 
          It is most famous for melting parts of a Jaguar car parked on the street. 
          The sun’s rays were at a direct angle to cause the car parts to melt.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Leadenhall Building - Cheesegrater</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          122 Leadenhall Street was completed in only 1 year and 1 month. 
          The building looks like a giant Cheesegrater hence the nickname. It is 48 stories tall. 


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>HMS Belfast</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          Once part of the mighty Royal Navy, it was completed on August 3rd, 1939. 
          This was one month before the start of WWII. The ship also had action in the Korean War as well. 
          Named after the capital of Northern Ireland, it was decommissioned in 1963 and was brought to London in 1971.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>BT Tower</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          Completed in 1964, it was London’s tallest structure until 1980. It is a grade II communications tower. 


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Custom House</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          This building was built in 1819 after the old one was burned down in 1814.
          It served as a collection for custom duties or taxes imposed on imports or exports
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Pool of London</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          The part of the River Thames between Tower Bridge and London Bridge. This was where trading occurred. 
          Tower Bridge let ships enter the Pool of London.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>St. Paul’s Cathedral</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          Completed in 1710, it was London’s tallest building at the time. The Cathedral replaced Old St. Paul’s Cathedral.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style = {{ width: "90%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style = {{fontFamily: "EuphemiaUCAS-Bold", color: "#2c368b"}}>Monument</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style= {{fontFamily: "EuphemiaUCAS",color: "#2c368b"}}>
          The Monument to the Great Fire of London was completed in 1677 and was built to commemorate the Great Fire of London in 1666.

          </Typography>
        </AccordionDetails>
      </Accordion>
          
         </div>
        
         
          <Link to='/Pano' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Back</Button>
          </Link>
        </center>
    </div>
  
  );
}

export default PanoMore;