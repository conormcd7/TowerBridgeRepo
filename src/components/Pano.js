
import React from 'react'
import pic1 from './WalkwayPhotos/1751.jpg';
import pic3 from './WalkwayPhotos/current.jpg';
import pic0 from './WalkwayPhotos/idk.jpg';
import pic4 from './WalkwayPhotos/1988.jpg';
import pic2 from './WalkwayPhotos/idk2.jpeg';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';

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
    color: "#43CFEE",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "35px",
    font: "Josefin Sans",
    textAlign: "center"    
  };
  const subText2 = {
    color: "#43CFEE",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "22px",
    font: "Josefin Sans",
    textAlign: "center",  
    width: "80%"
  };
  const buttonStyle = {
    marginTop:"25px",  
    marginLeft:"5px"
  };
  const buttonStyle2 = {
    marginTop:"25px",   
    marginLeft:"0px",
  };
  const sliderStyle = {
    height: "25px",
    width: "350px",
    marginTop:"200px",
    marginRight: "0px"
  };
  const groupStyle = {
    marginTop:"25px",
    marginRight: "0px"
  };
  
 

export default class Pano extends React.Component {
    state = {
        imageIndex: 50,
        imageOne: 1,
        imageTwo: 0,
        imageThree: 0,
        imageFour: 0
      }
    onClick0 = (e) => {
        this.setState({ imageOne : 1, imageTwo : 0, imageThree : 0, imageFour :0} );
     }
     onClick1  = (e) => {
        this.setState({ imageOne : 0, imageTwo : 1, imageThree : 0, imageFour :0} );
     }
     onClick2  = (e) => {
        this.setState({ imageOne : 0, imageTwo : 0, imageThree : 1, imageFour :0} );
     }
     onClick3  = (e) => {
        this.setState({ imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :1} );
     }
      setIndex = (e) => {
        this.setState({imageIndex: parseInt(e.target.value)});
      }
    
  render(){
    const {imageIndex} = this.state.imageIndex;
    const {imageOne} = this.state.imageOne;
    const {imageTwo} = this.state.imageTwo;
    const {imageThree} = this.state.imageThree;
    const {imageFour} = this.state.imageFour;
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
          <p style = {one}> 3.2 </p>
          <p style = {mystyle}>East Walkway: Skyline Panorama </p>
          <div>
            <div className="image-wrapper" style={{position: 'relative'}}>            
                <img style={{ width: "100%", clip: "rect(0px,"+800+"px ,800px,0px)", position:'absolute', left: "0"}} src={pic3}/>
                <img style={{ opacity: (this.state.imageOne), width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic1}/>
                <img style={{ opacity: (this.state.imageTwo),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic2}/>
                <img style={{ opacity: (this.state.imageThree),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic0}/>
                <img style={{ opacity: (this.state.imageFour),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic4}/>
            </div>
    
        </div>
        <input
              style = {sliderStyle}
              type="range"
              value={imageIndex}
              min="0"
              max="100"
              onChange={this.setIndex}
          />
          <Link to='/CaissonAnimation' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained">Back  </Button>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <AnchorIcon /> </Button>
          </Link>
          <ButtonGroup style = {groupStyle} variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.onClick0}>1751</Button>
            <Button onClick={this.onClick2}>1897</Button>
            <Button onClick={this.onClick1}>1905</Button>
            <Button onClick={this.onClick3}>1988</Button>
        </ButtonGroup>
        <p> {this.state.imageChoice} </p>
        </center>
      </div>
    </div>
  
  );
}
};
