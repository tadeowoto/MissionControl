import { imagesData } from "../data/imagesData";
type CardProps = {
  img: string | null;
  name: string;
  date: string;
  status: boolean;
  flightNumber: number;
};

const LaunchCard = ({ name, date, status, img, flightNumber }: CardProps) => {
  //TODO : add link to the launch, change status styles
  if (img === null) {
    const random = Math.floor(Math.random() * imagesData.length);
    img = imagesData[random].src;
  }
  return (
    <div className="flex h-[336px] max-w-full flex-col bg-bg-300 rounded-xl hover:scale-102 hover:transition-all md:h-[440px] md:max-w-[350px]">
      <div className="h-1/2">
        <img
          src={img}
          alt="card image"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="h-1/2 w-full p-4 box-border flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider font-orbitron">
          {name}
        </h1>
        <p className=" text-text-100 font-semibold text-md font-roboto hidden lg:inline">
          Date: <span className="text-white ">{date}</span>{" "}
        </p>
        <p className=" text-text-100 font-semibold text-md font-roboto">
          Flight Number: <span className="text-white">{flightNumber}</span>
        </p>
        <p className=" text-text-100 font-semibold text-md font-roboto">
          Status: <span className="text-white">{status}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default LaunchCard;
