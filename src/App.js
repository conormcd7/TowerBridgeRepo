import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Introduction from './components/Introduction';
import Page1 from './components/Page1';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Introduction} exact/>
             <Route path="/Page1" component={Page1}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

//<ReactPlayer
  //        className='react-player fixed-bottom'
    //      url= 'Animation.mp4'
      //    width='100%'
        //  height='25%'
          //controls = {true}
        ///>
