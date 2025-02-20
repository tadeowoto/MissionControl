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
    console.log(random);
    img = imagesData[random].src;
    console.log(img);
  }
  return (
    <div className="flex h-[336px] w-[420px] flex-col bg-bg-300 rounded-xl hover:scale-102 hover:transition-all ">
      <div className="h-1/2">
        <img
          src={img}
          alt="card image"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="h-1/2 w-full p-4 box-border flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-white tracking-wider font-orbitron">
          {name}
        </h1>
        <p className=" text-text-100 font-semibold text-md font-roboto">
          Date: <span className="text-white">{date}</span>{" "}
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
