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
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  background-color: red;
  width: 100%;
`
const Right = styled.div`
  background-color: blue;
  width: 100%;
`

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>Dit is een test</Left>
        <Right>Dit is een test</Right>
      </Container>
    </Section>
  )
}

export default Hero