import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Services/Services";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="mt-16">
        <div>
          <h2 className="text-4xl text-center font-sans font-bold">Our Service</h2>
        </div>
        <div className="my-4  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 py-4  gap-6">
          {services?.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
