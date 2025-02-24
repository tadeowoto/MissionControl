import NavBar from "../components/NavBar";
import MainFooter from "../components/MainFooter";
type LayoutsProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutsProps) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen w-full bg-bg-50 text-white overflow-x-hidden">
        {children}
      </main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
