import Navbar from "@/components/ui1/Navbar";

type props = {
  children: React.ReactNode;
};

export default function layout({ children }: props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
