// src/NikeVideo.js
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './NikeVideo.css';

const NikeVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const player = videojs(videoElement, {
        controls: false,
        autoplay: true,
        loop: true,
        muted: true,
        fluid: true,
        preload: 'auto',
      });

      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
      >
        <source src="/videos/nike-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>Just Do It</h1>
        <p>Inspiration to achieve more</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default NikeVideo;

