import { keyframes } from "@emotion/react";

const fadeUp = keyframes`
      from {
        opacity: 0;
        transform: translate3d(0, 40px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `;

const fadeRight = keyframes`
      from {
        opacity: 0;
        transform: translate3d(-40px, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `;

const fadeLeft = keyframes`
      from {
        opacity: 0;
        transform: translate3d(40px, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `;

const MyAnimations = { fadeUp, fadeRight, fadeLeft };

export default MyAnimations;
