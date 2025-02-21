import NavBar from "../components/NavBar";
type LayoutsProps = {
  children: React.ReactNode;
};

const SecondaryLayout = ({ children }: LayoutsProps) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen w-full  text-white">{children}</main>
    </>
  );
};

export default SecondaryLayout;
