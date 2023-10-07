const Services = () => {
  return (
    <div>
      <h2>our service</h2>
      <section className="my-4  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 py-4 px-3 gap-6">
        <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
          <div className=" flex flex-col items-center ">
            <img className="" src={"https://i.ibb.co/pZSNXvb/home.jpg"} alt="" />
          </div>
          <div className="w-72  mx-auto space-y-2">
            <h2 className="text-2xl font-bold">wedding name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum?</p>
            <p>price$</p>
            <button className="btn btn-success w-full">details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
