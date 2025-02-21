import MainLayout from "../../layouts/MainLayout";
import CountUp from "react-countup";
import VehicleCard from "../../components/VehicleCard";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";

const Vehicles = () => {
  const { rockets } = useContext(ApiContext);
  console.log(rockets);
  return (
    <MainLayout>
      <article className="w-full min-h-screen flex justify-center items-center pb-10">
        <div className="w-full h-full absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1517976384346-3136801d605d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-7xl font-bold font-orbitron text-white relative z-10 tracking-widest">
            Rockets
          </h1>
        </div>
      </article>
      <article className="w-full h-96 bg-bg-50 flex justify-center items-center">
        <div className="text-white font-orbitron flex gap-50">
          <div className="text-center border-r-2 pr-50 box-border">
            <CountUp start={0} end={449} duration={4} className="text-8xl" />
            <p className="text-2xl">Completed Missions</p>
          </div>
          <div className="text-center border-r-2 pr-50 box-border">
            <CountUp start={0} end={410} duration={4} className="text-8xl" />
            <p className="text-2xl">Total Landings</p>
          </div>
          <div className="text-center">
            <CountUp start={0} end={381} duration={4} className="text-8xl" />
            <p className="text-2xl">Total Reflights</p>
          </div>
        </div>
      </article>
      <article className="w-full min-h-screen flex justify-center items-center pt-10 bg-bg-50">
        <div className="w-full h-full grid grid-cols-2 auto-rows-auto gap-y-20 justify-items-center">
          {rockets.map((rocket) => (
            <VehicleCard
              name={rocket.name}
              type={rocket.type}
              img={rocket.flickr_images[1]}
            />
          ))}
        </div>
      </article>
    </MainLayout>
  );
};

export default Vehicles;
