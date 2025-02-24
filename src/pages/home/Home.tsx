import SecondaryLayout from "../../layouts/SecondaryLayout";
import { Link } from "react-router-dom";
import MainButton from "../../components/MainButton";

const Home = () => {
  return (
    <SecondaryLayout>
      <article>
        <div className="relative h-screen">
          <img
            src="/home.jpg"
            alt="spacex image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-start justify-center h-full pt-80 pl-20 font-orbitron">
            <h1 className="relative bottom-90 right-10 text-3xl text-center font-bold mb-4 text-white tracking-wider">
              Discover all spacex launches here
            </h1>
            <div className="relative top-35">
              <Link to="/launches">
                <MainButton txt="Lets go!"></MainButton>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SecondaryLayout>
  );
};

export default Home;
