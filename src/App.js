import pic1 from './BridgePhotos/TBridge.JPG';
import './App.css';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';


function App() {
  const mystyle = {
    color: "#1976d2",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "30px",
    font: "Josefin Sans",
    textAlign: "center"    
  };
  const mystyle2 = {
    backgroundColor: "#FFFFFF",
  };
  const mystyle3={
    backgroundColor: "#1976d2",
    height: 2,
    width: "65%"
}
const mystyle4 = {
  color: "#1976d2",
  fontSize: "15px",
  textAlign: "center",
  font: "Josefin Sans",
  padding: "15px",

  
};
const mystyle5 = {
  marginTop:"40px", 
  height:"100%", 
  width:"100%"

  
};
const buttonStyle = {
  marginTop:"120px",   
};
 
  return (
    <div style = {mystyle2} className='Top'>
      <div className="Header"  >
        <center>
          <h1 style = {mystyle}> Tower Bridge</h1>
          <hr style = {mystyle3}/>
          <h1 style = {mystyle4}> A Guided Tour </h1>
        </center>
         
      </div>
      <div className="border d-flex align-items-center">
        
        <center>
          <img src={pic1} style={mystyle5} alt="pic1" />
        </center>
        <center>
          <Button style={buttonStyle} variant="contained">Begin Tour</Button>
        </center>
      </div>
    </div>
  
  );
}

export default App;

//<ReactPlayer
  //        className='react-player fixed-bottom'
    //      url= 'Animation.mp4'
      //    width='100%'
        //  height='25%'
          //controls = {true}
        ///>
