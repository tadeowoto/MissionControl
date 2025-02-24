import MainLayout from "../../layouts/MainLayout";
import LaunchCard from "../../components/LaunchCard";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import NextLaunch from "../../components/NextLaunch";

const Launches = () => {
  const { upComingLaunches } = useContext(ApiContext);

  console.log(upComingLaunches);
  return (
    <MainLayout>
      <article className="w-full min-h-screen flex flex-col bg-bg-100 pb-10 lg:flex-row">
        <div className="pt-80 px-10 flex-1">
          <div className="flex items-center justify-center gap-10 mb-10 flex-col md:flex-row">
            <h1 className="text-3xl font-bold font-orbitron text-accent-300 tracking-wider md:font-2xl text-center">
              Upcoming Launches
            </h1>
            <div className="relative">
              <MagnifyingGlassCircleIcon className="absolute h-6 w-6 left-3 top-2.5 mr-2 text-white" />
              <input
                type="text"
                className="bg-transparent text-white px-2 py-2 rounded-lg border border-white transition-all cursor-pointer text-lg font-orbitron hover:scale-105 pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 auto-rows-auto lg:grid-cols-3">
            {upComingLaunches.map((launch) => (
              <LaunchCard
                name={launch.name}
                date={launch.date_utc}
                status={launch.upcoming}
                img={
                  launch.links.flickr.small[0] ||
                  launch.links.flickr.original[0] ||
                  launch.links.patch.small ||
                  launch.links.patch.large
                }
                flightNumber={launch.flight_number}
                key={launch.id}
              />
            ))}
          </div>
        </div>
        <aside className="w-full flex items-center justify-center pt-10 md:w-1/4 md:pt-80">
          <article className="flex flex-col items-center justify-start w-full  h-full  font-orbitron">
            <NextLaunch />
          </article>
        </aside>
      </article>
    </MainLayout>
  );
};

export default Launches;
