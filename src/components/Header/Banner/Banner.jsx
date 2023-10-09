const Banner = () => {
  return (
    <div className="w-full h-[100vh] mt-5">
      <div
        className="hero w-full min-h-screen opacity-95"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/415PJFt/kate-trysh-ZUWls-b-Dg-Ak-unsplash.jpg)",
        }}
      >
        <div className="hero-content text-center text-neutral-content" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="">
            <h1 className="mb-10 text-5xl font-bold text-white font-mono">
              Creating Memorable Moments Your Premier <br /> Social Event
              Company!
            </h1>
            <p className="text-white font-semibold font-mono">
              Elevate Your Celebrations with Us! Expertly crafted social events
              that leave lasting memories. 🎉 #EventExcellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
