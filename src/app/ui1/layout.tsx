import Footer from "@/components/ui1/Footer";
import Navbar from "@/components/ui1/Navbar";

type props = {
  children: React.ReactNode;
};

export default function layout({ children }: props) {
  return (
    <div className="hide-scrollbar">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
