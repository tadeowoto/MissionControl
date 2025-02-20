import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      <article>
        <div className="relative h-screen">
          <img
            src="/home.jpg"
            alt="spacex image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-start justify-center h-full pt-80 pl-20 font-orbitron">
            <h1 className="text-4xl font-bold mb-4 text-white tracking-wider">
              Discover all spacex launches here
            </h1>
            <Link to="/launches">
              <button className="bg-transparent text-white px-16 py-2 rounded-lg border border-white transition-all cursor-pointer text-lg hover:scale-105 ">
                Lets go!
              </button>
            </Link>
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default Home;
