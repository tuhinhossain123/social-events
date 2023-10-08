import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Services = ({ service }) => {
  const { name, img, price, button, short_description, id } = service;
  return (
    <div>
      <section className="">
        <div className=" space-y-2 py-3 shadow-2xl rounded-lg ">
          <div className=" flex flex-col items-center">
            <img className="w-[368px] h-[245px]" src={img} alt="" />
          </div>
          <div className="w-72 mx-auto space-y-2">
            <h2 className="text-2xl font-bold ">{name}</h2>

            {short_description.length > 80 ? (
              <p className="text-slate-500">
                {short_description.slice(0, 80)}{" "}
                <Link to={`/details/${id}`} className="text-red-400">
                  Read More...
                </Link>
              </p>
            ) : (
              <p>{short_description}</p>
            )}

            <p className="text-xl font-semibold pb-3">${price}</p>
            <Link to={`/details/${id}`}>
              <button className="btn bg-gray-400 text-white font-semibold w-full">
                {button}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
