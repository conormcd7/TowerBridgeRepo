
import React from 'react'
import pic1 from './WalkwayPhotos/1751.jpg';
import pic1L from './WalkwayPhotos/1751Marked.jpg';
import pic3 from './WalkwayPhotos/current.jpg';
import pic3L from './WalkwayPhotos/currentmarked.jpg';
import pic0 from './WalkwayPhotos/idk.jpg';
import pic0L from './WalkwayPhotos/1897marked.jpg';
import pic4 from './WalkwayPhotos/1988.jpg';
import pic4L from './WalkwayPhotos/1988marked.jpg';
import pic2 from './WalkwayPhotos/idk2.jpeg';
import pic2L from './WalkwayPhotos/1905marked.jpg'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom'
import AnchorIcon from '@mui/icons-material/Anchor';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

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
  const labSty = {
    color: "#2c368b",
   //backgroundColor: "lightgray",
    padding: "0px",
    fontSize: "15px",
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
    marginLeft:"5px",
    backgroundColor:"#2c368b"
  };
  const buttonStyle2 = {
    marginTop:"25px",   
    marginLeft:"0px",
    backgroundColor:"#2c368b"
  };
  const buttonStyle3 = {
    backgroundColor:"#2c368b"
  };
  const sliderStyle = {
    width: "350px",
    marginTop:"200px",
    marginRight: "0px",
    color:"#2c368b"

    
    
  };

  const buttonStyleText = {
    color:"#2c368b",


  };
  const groupStyle = {
    marginTop:"25px",
    marginRight: "0px"
  };
  
 

export default class Pano extends React.Component {
    state = {
        imageIndex: 50,
        imageZero: 1,
        imageOne: 1,
        imageTwo: 0,
        imageThree: 0,
        imageFour: 0,
        imageZeroL: 0,
        imageOneL: 0,
        imageTwoL: 0,
        imageThreeL: 0,
        imageFourL: 0,
        flipped: false
        
      }
    onClick0 = (e) => {
        if (this.state.flipped) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 1, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        } else {
            this.setState({ imageZero: 1, imageOne : 1, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        }
       
     }
     onClick1  = (e) => {
        if (this.state.flipped) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 0, imageTwoL : 1, imageThreeL : 0, imageFourL :0
            } );
        } else {
            this.setState({ imageZero: 1, imageOne : 0, imageTwo : 1, imageThree : 0, imageFour :0,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        }
     }
     onClick2  = (e) => {
        if (this.state.flipped) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 0, imageTwoL : 0, imageThreeL : 1, imageFourL :0
            } );
        } else {
            this.setState({ imageZero: 1, imageOne : 0, imageTwo : 0, imageThree : 1, imageFour :0,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        }
     }
     onClick3  = (e) => {
        if (this.state.flipped) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :1
            } );
        } else {
            this.setState({ imageZero: 1, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :1,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        }
     }
     onChange  = (prevState) => {
        this.setState(prevState => ({
            flipped: !prevState.flipped
          }));
          if (this.state.flipped && (this.state.imageOne == 1 || this.state.imageOneL ==1)) {
            this.setState({ imageZero: 1, imageOne : 1, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        } 
        if (!this.state.flipped && (this.state.imageOne == 1 || this.state.imageOneL ==1)) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 1, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        }
        if (this.state.flipped && (this.state.imageTwo == 1 || this.state.imageTwoL ==1)) {
            this.setState({ imageZero: 1, imageOne : 0, imageTwo : 1, imageThree : 0, imageFour :0,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        } 
        if (!this.state.flipped && (this.state.imageTwo == 1 || this.state.imageTwoL ==1)) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 0, imageTwoL : 1, imageThreeL : 0, imageFourL :0
            } );
        }
        if (this.state.flipped && (this.state.imageThree == 1 || this.state.imageThreeL ==1)) {
            this.setState({ imageZero: 1, imageOne : 0, imageTwo : 0, imageThree : 1, imageFour :0,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        } 
        if (!this.state.flipped && (this.state.imageThree == 1 || this.state.imageThreeL ==1)) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 0, imageTwoL : 0, imageThreeL : 1, imageFourL :0
            } );
        }
        if (this.state.flipped && (this.state.imageFour == 1 || this.state.imageFourL ==1)) {
            this.setState({ imageZero: 1, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :1,
                imageZeroL: 0, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :0
            } );
        } 
        if (!this.state.flipped && (this.state.imageFour == 1 || this.state.imageFourL ==1)) {
            this.setState({ imageZero: 0, imageOne : 0, imageTwo : 0, imageThree : 0, imageFour :0,
                imageZeroL: 1, imageOneL : 0, imageTwoL : 0, imageThreeL : 0, imageFourL :1
            } );
        }
          
     }
      setIndex = (e) => {
        this.setState({imageIndex: parseInt(e.target.value)});
      }
    
  render(){
    const {imageIndex} = this.state.imageIndex;
    const {imageZero} = this.state.imageZero;
    const {imageZeroL} = this.state.imageZeroL;
    const {imageOne} = this.state.imageOne;
    const {imageTwo} = this.state.imageTwo;
    const {imageThree} = this.state.imageThree;
    const {imageFour} = this.state.imageFour;
    const {imageOneL} = this.state.imageOneL;
    const {imageTwoL} = this.state.imageTwoL;
    const {imageThreeL} = this.state.imageThreeL;
    const {imageFourL} = this.state.imageFourL;
    const {flipped} = this.state.flipped;
  return (
    
    <div  className='Top'>
      
      <div className="Header"  >
        <center>
          <p style = {one}> B 5.21 </p>
          <p style = {mystyle}>West Walkway: Skyline Panorama </p> 
          <p style = {labSty}>Label Buildings </p> 
          <Switch  onClick={this.onChange} />
          <div>
            <div className="image-wrapper" style={{position: 'relative'}}>            
                <img style={{ opacity: (this.state.imageZero),  width: "100%", clip: "rect(0px,"+800+"px ,800px,0px)", position:'absolute', left: "0"}} src={pic3}/>
                <img style={{ opacity: (this.state.imageOne), width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic1}/>
                <img style={{ opacity: (this.state.imageTwo),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic2}/>
                <img style={{ opacity: (this.state.imageThree),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic0}/>
                <img style={{ opacity: (this.state.imageFour),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic4}/>
               
                <img style={{opacity: (this.state.imageZeroL), width: "100%", clip: "rect(0px,"+800+"px ,800px,0px)", position:'absolute', left: "0"}} src={pic3L}/>
                <img style={{ opacity: (this.state.imageOneL), width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic1L}/>
                <img style={{ opacity: (this.state.imageTwoL),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic2L}/>
                <img style={{ opacity: (this.state.imageThreeL),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic0L}/>
                <img style={{ opacity: (this.state.imageFourL),width: "100%", clip: "rect(0px,"+(this.state.imageIndex*4)+"px ,400px,0px)", position:'absolute', left: "0"}} src={pic4L}/>
            </div>
    
        </div>
        <Slider onChange={this.setIndex} defaultValue={imageIndex} style = {sliderStyle} aria-label="slider" />
          <Link to='/PanoIntro' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle2} variant="contained"><ArrowBackIosIcon />Back  </Button>
          </Link>
          <Link to='/Pano2' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle} variant="contained">Continue <ArrowForwardIosIcon /> </Button>
          </Link>
          <ButtonGroup style = {groupStyle} variant="contained" aria-label="outlined primary button group">
            <Button style={buttonStyle3} onClick={this.onClick0}>1751</Button>
            <Button style={buttonStyle3} onClick={this.onClick2}>1897</Button>
            <Button style={buttonStyle3} onClick={this.onClick1}>1905</Button>
            <Button style={buttonStyle3} onClick={this.onClick3}>1988</Button>
        </ButtonGroup>
        <p> {this.state.imageChoice} </p>
        <p ></p>
          <Link to='/PanoMore' style={{ textDecoration: 'none' }}>
            <Button style={buttonStyleText} variant="text">See More  </Button>
          </Link>
        </center>
      </div>
    </div>
  
  );
}
};
//<input
              //style = {sliderStyle}
             // type="range"
             // value={imageIndex}
            //  min="0"
           ///   max="100"
           //   onChange={this.setIndex}
         // />