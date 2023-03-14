import styled from 'styled-components'
import React from 'react'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
font-size: 74px;
font-weight: 600;
line-height: 1.2;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Subtitle = styled.h2`
  color: #aa4ab5;
  font-weight: 500;
`
const Line = styled.span`
width: 30px;
height: 5px;
background: white;
`
const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`
const Button = styled.button`
  background: #aa4ab5;
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Right = styled.div`
  flex: 3;
  position: relative;
`

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Ontwerp. Code. Lanseer.</Title>
          <WhatWeDo>
            <Subtitle><Line/>&#123; Front-end Developer &#125;</Subtitle>
          </WhatWeDo>
          <Desc>Ik ben geen genie, maar met HTML, CSS en JavaScript kan ik een website bouwen die eruitziet alsof ik er een ben.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/*3D Model*/}
        </Right>
      </Container>
    </Section>
  )
}

export default Hero