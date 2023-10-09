const OurTeam = () => {
  return (
    <div className="mt-16 px-10 ">
      <h2 className="text-5xl text-center font-serif">Our Team</h2>
      <p className="text-center font-mono text-2xl pt-4">Organizers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center space-y-5 mt-5 mb-20">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.ibb.co/RHhqSv1/img3.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-slate-500 text-center">Devon</h3>
            <p className="text-center">Wedding Planner</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.ibb.co/BBpMTTm/img5.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-slate-500 text-center">Riyan</h3>
            <p className="text-center">Birthday Parties Planner</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.ibb.co/JdZv6VT/img6.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-slate-500 text-center">Tuhin</h3>
            <p className="text-center">Anniversaries Parties Planner</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.ibb.co/9Y0Rrkh/img1-2.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-slate-500 text-center">Afrin</h3>
            <p className="text-center">Engagement Parties Planner</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.ibb.co/Y8L9LMH/img4.jpg"
            alt=""
          />
          <div className="">
            <h3 className="text-xl font-semibold text-slate-500 text-center">Forid</h3>
            <p className="text-center">Retirement Parties Planner</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.ibb.co/KFJM0ZZ/img2.jpg"
            alt=""
          />
           <div className="">
            <h3 className="text-xl font-semibold text-slate-500 text-center">Devon</h3>
            <p className="text-center">Baby showerPlanner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
