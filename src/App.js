import pic1 from './BridgePhotos/Tower_Bridge_2009-29.jpg';
import './App.css';
import ReactPlayer from 'react-player'



function App() {
  const mystyle = {
    color: "white",
    width: "66%",
    textAlign: "center",
    borderRadius: "25px",
    margin: "0 auto",
   //backgroundColor: "lightgray",
    padding: "30px",
    fontFamily: "Arial"
    
  };
  const mystyle2 = {
    backgroundColor: "#000048",
  };
 
  return (
    <div style = {mystyle2} className='Top'>
      <div className="Header"  >
        <h1 style = {mystyle}> Tower Bridge Tour </h1>
      </div>
      <div className="border d-flex align-items-center" textAlign= "center">
        <img src={pic1}  alt="pic1" />;
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
