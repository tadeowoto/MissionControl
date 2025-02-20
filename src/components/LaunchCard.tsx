type CardProps = {
  img: string | null;
  name: string;
  date: string;
  status: string;
};

const LaunchCard = ({ name, date, status, img }: CardProps) => {
  return (
    <div className="flex h-[336px] w-[420px] flex-col bg-bg-300 rounded-xl font-orbitron">
      <div className="h-1/2">
        <img
          src={img ? img : "/home.jpg"}
          alt="card image"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="h-1/2 w-full p-4 box-border flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-white tracking-wider">{name}</h1>
        <p className="text-sm text-gray-400">Date {date}</p>
        <p className="text-sm text-gray-400">Agency: Spacex</p>
        <p className="text-sm text-gray-400">Status {status}</p>
      </div>
    </div>
  );
};

export default LaunchCard;
