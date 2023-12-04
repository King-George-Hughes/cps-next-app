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

      <div className="container w-full h-full flex items-center p-5 text-white relative">
        <div className="absolute">
          <h1 className="text-7xl max-w-lg" style={{ fontFamily: "Pacifico" }}>
            Enjoy Your Dream Vacation
          </h1>
          <p className="my-8 text-xl max-w-xl">
            The Century Premier Suite Hotel is the right choice for visitors who
            are searching for a combination of charm, peace and, comfort.
          </p>
          <button className="text-lg bg-primary_color text-gray-800 px-5 py-2 rounded-sm font-medium">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
