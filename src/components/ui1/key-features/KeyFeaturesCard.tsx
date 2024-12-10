import Image, { StaticImageData } from "next/image";

type props = {
  topic: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
};

export default function KeyFeaturesCard({
  topic,
  title,
  description,
  imageUrl,
}: props) {
  return (
    <div className="bg-primary-light px-7 py-10 space-y-5 flex-1 rounded-lg">
      <div className="border rounded-lg px-5 py-0.5 bg-white w-fit">
        {topic}
      </div>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="leading-7 text-slate-500 font-light">{description}</p>

      <Image src={imageUrl} alt="Image" className="rounded-lg w-full" />
    </div>
  );
}
