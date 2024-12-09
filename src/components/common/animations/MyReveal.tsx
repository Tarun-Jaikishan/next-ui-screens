import { Reveal, RevealProps } from "react-awesome-reveal";

type props = {
  children: React.ReactNode;
} & RevealProps;

export default function MyReveal({
  children,
  duration = 1500,

  ...props
}: props) {
  return (
    <Reveal duration={duration} {...props}>
      {children}
    </Reveal>
  );
}
