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
          <div className="relative z-10 flex flex-col items-start justify-center h-full pt-20 pl-10 md:pt-40 md:pl-20 lg:pt-60 lg:pl-40 font-orbitron">
            <h1 className="relative bottom-10 right-0 text-2xl text-center font-bold mb-4 text-white tracking-wider md:text-3xl lg:text-4xl">
              SpaceX explore the Future of Space Travel
            </h1>
            <p className="relative bottom-10 right-0 left-10 text-md text-center text-white tracking-wider md:text-lg lg:text-xl lg:left-0">
              Be one of us.
            </p>
            <div className="relative top-5 md:top-10 lg:top-15">
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
