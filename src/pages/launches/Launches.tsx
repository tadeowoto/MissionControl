import MainLayout from "../../layouts/MainLayout";
import LaunchCard from "../../components/LaunchCard";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

const Launches = () => {
  const { upComingLaunches } = useContext(ApiContext);

  console.log(upComingLaunches);
  return (
    <MainLayout>
      <article className="w-full min-h-screen flex bg-bg-100">
        <div className="pt-80 px-10 flex-1">
          <div className="flex items-center gap-10 mb-10">
            <h1 className="text-4xl font-bold font-orbitron text-white tracking-wider">
              Upcoming Launches
            </h1>
            <div className="relative">
              <MagnifyingGlassCircleIcon className="absolute h-6 w-6 left-3 top-2.5 mr-2 text-white" />
              <input
                type="text"
                className="bg-transparent text-white px-10 py-2 rounded-lg border border-white transition-all cursor-pointer text-lg font-orbitron hover:scale-105 pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 auto-rows-auto">
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
        <aside className="w-1/4">
          <article>
            <h1 className="text-4xl font-bold mb-4 text-white tracking-wider">
              Next Launch
            </h1>
          </article>
        </aside>
      </article>
    </MainLayout>
  );
};

export default Launches;
