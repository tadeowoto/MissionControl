import { useContext } from "react";
import { ApiContext } from "../context/apiContext";

const NextLaunch = () => {
  const { nextLaunch } = useContext(ApiContext);

  return (
    <div className="max-w-md mx-auto bg-transparent p-6 rounded-xl border-4 border-accent-300 shadow-lg hover:scale-105 hover:transition-all">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Next Launch</h1>
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
          {nextLaunch.name}
        </h2>
        <p className=" text-white mb-4 font-roboto text-xl tracking-wider font-semibold">
          {nextLaunch.name} | Falcon 9 Mission
        </p>
        <p className=" text-white font-roboto text-xl tracking-wider font-semibold">
          Flight Number:{" "}
          <span className="font-semibold text-accent-300">
            {nextLaunch.flight_number || "No details available"}
          </span>
        </p>
      </div>

      <div className="mt-6 text-center font-orbitron">
        {nextLaunch.links.webcast && (
          <a
            href={nextLaunch.links.webcast}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-300 hover:text-gray-300 text-lg font-medium"
          >
            Watch Live
          </a>
        )}
      </div>
    </div>
  );
};

export default NextLaunch;
