type props = {
  logo: React.ReactNode;
  title: string;
  description: string;
};

export default function ChooseCard({ logo, title, description }: props) {
  return (
    <div className="group space-y-5 bg-white p-10 rounded-lg w-[26rem] h-[21rem] border hover:border-primary duration-500">
      <div className="bg-primary-light w-fit p-3 rounded-lg group-hover:bg-primary duration-500">
        {logo}
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="text-slate-500 font-light">{description}</p>
    </div>
  );
}
