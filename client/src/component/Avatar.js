import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";
import Avatar from "avataaars2";

const Container = styled.div`
  transform-style: preserve-3d;
  transform: perspective(921px);
  width: 300px;
  height: 300px;
  margin: 2rem;
`;

const Content = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

// code from https://codesandbox.io/s/condescending-dirac-r494u7?file=/src/Card.js:210-228
export const MotionAvatar = ({ height = 250, width = 250 }) => {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  // middle point in 2d space [150, 250]
  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  // how much should we rotate?
  const tx = 0.05;

  // get rotateY
  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  // get rotateX
  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  // get our spring values
  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  function onMouseOver(e) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    // if not hovering, reset to
    // our centerpoint.
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  return (
    <Container ref={ref} style={{ height: `${height}px`, width: `${width}px` }}>
      <Content
        style={{
          scale: 1,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onTapCancel={(e) => {
          setTapped(false);
          onMouseOver(e);
        }}
        onTapStart={() => {
          setTapped(true);
        }}
        onTap={(e) => {
          setTapped(false);
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
      >
        <Avatar
          avatarStyle="Circle"
          topType="LongHairNotTooLong"
          accessoriesType="Prescription02"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="BlazerSweater"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor="Light"
        ></Avatar>
      </Content>
    </Container>
  );
};
