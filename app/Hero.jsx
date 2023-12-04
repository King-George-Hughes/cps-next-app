import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video
        autoPlay
        muted
        loop
        src="/videos/hero-vid.mp4"
        className="fixed top-0 left-0 bottom-0 right-0 w-full h-full object-cover -z-10"
      ></video>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.4)]" />
    </div>
  );
};

export default Hero;
