

const Banner = () => {
    return (
        <div className=" h-[100vh] mb-10">
      <div
        className="hero w-full min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/9GHHRgb/banner.webp)",
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