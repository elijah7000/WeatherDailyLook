import styled from "styled-components";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { slideArray } from "../../../data/slide";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const SlideShow = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Description = styled.span`
  font-size: 50px;
  color: white;
  position: absolute;
  bottom: 50px;
  left: 50px;
`;

const ArrowButton = styled.button`
  width: 60px;
  height: 60px;
  font-size: 60px;
  display: flex;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  cursor: pointer;

  &.rightButton {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }
  &.leftButton {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
  }
`;

const vSlide: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      x: { type: "spring", stiffness: 500, damping: 30 },
      opacity: {
        duration: 0.2,
      },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,

    transition: {
      x: { type: "spring", stiffness: 500, damping: 30 },
      opacity: {
        duration: 0.2,
      },
    },
  }),
};

export default function NewSlide() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    if (index === slideArray.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const previous = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(slideArray.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <Wrapper>
      <Container>
        <AnimatePresence initial={false}>
          <SlideShow
            custom={direction}
            variants={vSlide}
            initial="initial"
            animate="animate"
            exit="exit"
            src={slideArray[index].src}
            key={slideArray[index].id}
          />
        </AnimatePresence>
        <Description>{slideArray[index].description}</Description>
        <ArrowButton onClick={previous} className="leftButton">
          <MdArrowLeft />
        </ArrowButton>
        <ArrowButton onClick={next} className="rightButton">
          <MdArrowRight />
        </ArrowButton>
      </Container>
    </Wrapper>
  );
}
