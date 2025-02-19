import NavBar from "../components/NavBar";

type LayoutsProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutsProps) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
