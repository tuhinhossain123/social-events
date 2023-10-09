const OurPackage = () => {
  return (
    <div className="mt-16 px-10">
      <h2 className="text-5xl text-center font-serif">Management Package</h2>
      <p className="text-center font-mono text-2xl pt-4">Choose Yours</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div className="  p-8 shadow-2xl rounded">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Wedding Package
            </h2>
            <h1>
              <span className="text-red-400 font-mono text-2xl">$ 5000</span>{" "}
              /Per day
            </h1>
            <ul className="space-y-3 text-xl text-gray-500">
              <li>Venue Rental</li>
              <li>Catering</li>
              <li>Decor and Flowers</li>
              <li>Photography and Videography</li>
              <li>Wedding Favors</li>
            </ul>
          </div>
        </div>
        <div className=" shadow-2xl rounded p-8">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Birthday Package
            </h2>
            <h1>
              <span className="text-red-400 font-mono text-2xl">$ 500</span>{" "}
              /Per day
            </h1>
            <ul className="space-y-3 text-xl text-gray-500">
              <li>Venue Rental</li>
              <li>Catering</li>
              <li>Decorations</li>
              <li>Cake and Desserts</li>
              <li>Event Coordinator</li>
            </ul>
          </div>
        </div>
        <div className=" shadow-2xl rounded p-8">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
            Anniversaries Package
            </h2>
            <h1>
              <span className="text-red-400 font-mono text-2xl">$ 2000</span>{" "}
              /Per day
            </h1>
            <ul className="space-y-3 text-xl text-gray-500">
              <li>Venue Rental</li>
              <li>Dining</li>
              <li>Personalized Touches</li>
              <li>Photography</li>
              <li>Entertainment</li>
            </ul>
          </div>
        </div>
        <div className=" shadow-2xl rounded p-8">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
            Engagement  Package
            </h2>
            <h1>
              <span className="text-red-400 font-mono text-2xl">$ 3000</span>{" "}
              /Per day
            </h1>
            <ul className="space-y-3 text-xl text-gray-500">
              <li>Venue Rental</li>
              <li>Catering</li>
              <li>Food and Beverage</li>
              <li>Photography and Videography</li>
              <li>Drinks</li>
            </ul>
          </div>
        </div>
        <div className="shadow-2xl rounded p-8">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
            Retirement Package
            </h2>
            <h1>
              <span className="text-red-400 font-mono text-2xl">$ 800</span>{" "}
              /Per day
            </h1>
            <ul className="space-y-3 text-xl text-gray-500">
              <li>Venue</li>
              <li>Decorations</li>
              <li>Decor and Flowers</li>
              <li>Photography and Videography</li>
              <li>Event Planning Services</li>
            </ul>
          </div>
        </div>
        <div className="shadow-2xl rounded p-8">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
            Baby shower Package
            </h2>
            <h1>
              <span className="text-red-400 font-mono text-2xl">$ 1200</span>{" "}
              /Per day
            </h1>
            <ul className="space-y-3 text-xl text-gray-500">
              <li>Venue Rental</li>
              <li>Invitations</li>
              <li>Gifts</li>
              <li>Photography and Videography</li>
              <li>Games and Activities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPackage;
