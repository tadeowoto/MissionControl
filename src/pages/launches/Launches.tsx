import MainLayout from "../../layouts/MainLayout";
import LaunchCard from "../../components/LaunchCard";

const Launches = () => {
  return (
    <MainLayout>
      <article className="w-full min-h-screen flex bg-bg-100">
        <div className="pt-40 px-20 flex-1">
          <div className="grid grid-cols-3 gap-8 auto-rows-auto">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
          </div>
        </div>
        <aside className="w-1/4"></aside>
      </article>
    </MainLayout>
  );
};

export default Launches;
