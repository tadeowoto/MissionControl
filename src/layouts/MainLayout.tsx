import NavBar from "../components/NavBar";

type LayoutsProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutsProps) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen w-full  text-white">{children}</main>
    </>
  );
};

export default MainLayout;
