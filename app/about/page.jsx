import React from "react";

const AboutPage = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: "url(/images/food.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.6)] backdrop-blur-sm" />
      <div className="container w-full px-5 lg:px-1 pt-36 pb-16">
        {/* <RoomsCard /> */}
      </div>
    </div>
  );
};

export default AboutPage;
