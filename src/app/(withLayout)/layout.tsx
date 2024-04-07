import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Set container here to fixed width
    <div className="container mx-auto">
      <Navbar />
      <div className="mt-5">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
