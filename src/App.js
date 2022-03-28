import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <h1> "hi" </h1>
      <ReactPlayer
          className='react-player fixed-bottom'
          url= 'Animation.mp4'
          width='25%'
          height='25%'
          controls = {true}
        />
    </div>
  );
}

export default App;
