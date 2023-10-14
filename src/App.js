import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import jsmpeg from 'jsmpeg';

function App() {
   
  useEffect(() => {
    var canvas1 = document.getElementById('chanel1');
    var canvas2 = document.getElementById('chanel2');
    var websocket = new WebSocket("ws://10.14.7.216:9999");
    var player1 = new jsmpeg(websocket, {canvas:canvas1, autoplay:true, loop:true, videoBufferSize:512})
  }, [])
  
  return (
    <div className="App">
      <div id="sub" style={{display: "flex",alignItems: "center"}}>
        <div id="video1">
      <canvas id="chanel1" style={{width:"802px",height: "460px",marginLeft: "209px"}}></canvas>
        </div>
        <div id="video2">
          <canvas id="chanel2"></canvas>
        </div>
        <div id="vehicle_capture">
        </div>
      </div>
    </div>
  );
}

export default App;
