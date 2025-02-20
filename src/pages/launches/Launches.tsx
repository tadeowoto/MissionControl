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
            {upComingLaunches.map((launch, index) => (
              <LaunchCard
                name={launch.name}
                date={launch.date_local}
                status={launch.launch_success ? "Success" : "Failed"}
                img={launch.links.mission_patch || null}
                key={index}
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
