type Props = {
  txt: string;
};

const MainButton = ({ txt }: Props) => {
  return (
    <button className="bg-transparent text-white px-16 py-2 rounded-lg border border-white transition-all cursor-pointer text-lg hover:scale-105 ">
      {txt}
    </button>
  );
};

export default MainButton;
