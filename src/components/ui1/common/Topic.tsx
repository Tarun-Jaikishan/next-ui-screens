import { twMerge } from "tailwind-merge";

type props = {
  value: string;
  className?: string;
};

export default function Topic({ value, className = "" }: props) {
  return (
    <div
      className={twMerge(
        "border-2 rounded-xl px-5 py-1.5 bg-primary-light w-fit",
        className
      )}
    >
      {value}
    </div>
  );
}
