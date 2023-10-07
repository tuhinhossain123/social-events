/* eslint-disable react/prop-types */
const Services = ({service}) => {
    const {name,img,price,button}=service;
  return (
    <div>
      
      <section className="">
     
        <div className=" space-y-2 py-3 shadow-2xl rounded-lg ">
          <div className=" flex flex-col items-center">
            <img
              className="w-[368px] h-[245px]"
              src={img}
              alt=""
            />
          </div>
          <div className="w-72 mx-auto space-y-2">
            <h2 className="text-2xl font-bold ">{name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              dolorum?
            </p>
            <p className="text-xl font-semibold">${price}</p>
            <button className="btn bg-gray-400 text-white font-semibold w-full">{button}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
