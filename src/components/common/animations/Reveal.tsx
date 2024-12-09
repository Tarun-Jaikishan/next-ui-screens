import React from "react";

import { Reveal, RevealProps } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

interface FadeUpProps extends RevealProps {
  children: React.ReactNode;
}

const FadeUp: React.FC<FadeUpProps> = ({
  children,
  duration = 1500,
  ...props
}) => {
  const keyFrames = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0); 
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0); 
    }
  `;

  return (
    <Reveal keyframes={keyFrames} duration={duration} {...props} triggerOnce>
      {children}
    </Reveal>
  );
};

export default FadeUp;
