import React from 'react'
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const opacityRange = useTransform(scrollY, [30, 140], [1, 0]);
  const yRange = useTransform(scrollY, [30, 70], [0, 100]);

  const opacity = useSpring(opacityRange, { stiffness: 200, damping: 100 });
  const y = useSpring(yRange, { stiffness: 200, damping: 100 });


  return (
    <HeroSection>
      <Container>
        <h1 style={{ marginBottom: '100px', opacity, y}}> 成熟社会<br />Consotium</h1>
        <TextContainer style={{ opacity, y }}>
          <Title>
            <h6>About</h6>
          </Title>
          <Text>
            <p>こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。</p>
          </Text>
        </TextContainer>
        <ImgContainer style={{  }}>
        </ImgContainer>
      </Container>
    </HeroSection>
  )
}

const HeroSection = styled(motion.section)`
  margin: 0 auto;
  width: 100%;
  height: 70vh;
  display: flex;
`
const Container = styled(motion.div)`
  margin: 0 auto;
  padding: 150px 0;
`

const TextContainer = styled(motion.div)`
  display:flex;
`

const Title = styled(motion.div)`
  width: 300px;
`
const Text = styled(motion.div)`
  width: 700px;
`
const ImgContainer = styled(motion.div)`
  height: 300px;
  background-color: red;
`
export default Hero;
