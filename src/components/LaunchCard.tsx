const LaunchCard = () => {
  return (
    <div className="flex h-[336px] w-[420px] flex-col bg-bg-300 rounded-xl font-orbitron">
      <div className="h-1/2">
        <img
          src="/home.jpg"
          alt="card image"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="h-1/2 w-full p-4 box-border flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          Launch Name
        </h1>
        <p className="text-sm text-gray-400">Launch Date</p>
        <p className="text-sm text-gray-400">Agency: </p>
        <p className="text-sm text-gray-400">Status</p>
      </div>
    </div>
  );
};

export default LaunchCard;
