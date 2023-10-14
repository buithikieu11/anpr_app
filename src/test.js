import React, { useRef, useEffect } from 'react';
function VideoPlayer() {
  const videoRef = useRef(null);
  let player = null;

  useEffect(() => {
    if (videoRef.current) {
      // Replace 'path-to-your-video.mp4' with the path to your video file
      var player= new jsmpeg(websocket, {canvas:canvas, autoplay:true, loop:true})
    }

    // Clean up when the component is unmounted
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={videoRef}></canvas>
    </div>
  );
}
export default VideoPlayer;
