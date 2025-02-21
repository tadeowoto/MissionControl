const VehicleCard = () => {
  return (
    <div className="w-[900px] h-[640px] bg-bg-50 border border-accent-50-100">
      <div className="h-2/3 w-full">
        <img src="/home.jpg" alt="" />
      </div>
      <div className="h-1/3 w-full flex flex-col">
        <p className="text-white font-roboto text-xl">Fecha de ejemplo</p>
        <h1 className="text-white font-orbitron text-3xl">Nombre del cohete</h1>
        <button> ver mas</button>
      </div>
    </div>
  );
};

export default VehicleCard;
