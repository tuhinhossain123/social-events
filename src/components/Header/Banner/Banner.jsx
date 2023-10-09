const Banner = () => {
  return (
    <div className="w-full h-[100vh] border-2">
      <div
        className="hero w-full min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/bdkVF2t/DSC-9072.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-10">
            <h1 className="mb-10 text-5xl font-bold text-black">
              WEDDING ORGANIZER COMPANY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
