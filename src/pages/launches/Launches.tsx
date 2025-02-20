import MainLayout from "../../layouts/MainLayout";
import LaunchCard from "../../components/LaunchCard";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";

const Launches = () => {
  const { upComingLaunches } = useContext(ApiContext);

  console.log(upComingLaunches);
  return (
    <MainLayout>
      <article className="w-full min-h-screen flex bg-bg-100">
        <div className="pt-40 px-20 flex-1">
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
        <aside className="w-1/4"></aside>
      </article>
    </MainLayout>
  );
};

export default Launches;
