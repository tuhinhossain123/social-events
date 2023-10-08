import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find((detail) => detail.id === idInt);
  console.log(detail);
  return (
    <div className="lg:flex rounded p-8 shadow-inner mb-4">
      <div>
        <img
          src={detail.img}
          alt=""
          className="w-4/5 h-2/4 mx-auto rounded-lg shadow-2xl my-6"
        />
      </div>
      <div>
        <h2 className="text-3xl text-center font-bold underline italic mb-4 mt-4">
          {detail.name}
        </h2>

        <p className=" font-semibold text-justify ">
          <span className="underline font-bold">Details:</span>{" "}
          {detail.short_description}
        </p>
      </div>
    </div>
  );
};

export default Details;
