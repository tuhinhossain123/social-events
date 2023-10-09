import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Services/Services";
import OurTeam from "../OurTeam/OurTeam";
import OurPackage from "../OurPackege/OurPackage";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Banner></Banner>
     
      <div className="mt-16 px-10">
        <div>
          <h2 className="text-5xl text-center font-serif">Our Service</h2>
        </div>
        <div className="my-4  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 py-4  gap-6">
          {services?.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>

      </div>
     <OurPackage></OurPackage>
       <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
