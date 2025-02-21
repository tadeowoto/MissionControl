import MainButton from "./MainButton";

type VehicleCardProps = {
  name: string;
  type: string;
  img: string;
};

const VehicleCard = ({ name, type, img }: VehicleCardProps) => {
  return (
    <div className="w-[900px] h-[640px] bg-bg-50">
      <div className="h-2/3 w-full">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="h-1/3 w-full flex flex-col gap-6">
        <p className="text-white font-orbitron text-xl">Type: {type}</p>
        <h1 className="text-white font-orbitron text-5xl">{name}</h1>
        <div className=" h-full flex justify-start items-end">
          <MainButton txt="Ver más" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
