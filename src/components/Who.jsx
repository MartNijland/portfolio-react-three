import styled from 'styled-components'
import React from 'react'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;

`
const Title = styled.h1`
font-size: 74px;
font-weight: 600;
line-height: 1.2;
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
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

function Who() {
  return (
    <Section>
      <Container>
        <Left>

        </Left>
        <Right>
        <Title>Thinking outside the box-model</Title>
          <WhatWeDo>
            <Subtitle><Line/>&#123; Wie ik ben &#125;</Subtitle>
          </WhatWeDo>
          <Desc>k ben een 24 jarige Hengeloöer met een passie voor coderen.<br /> Ik hou ervan om bezig te zijn met 3D objecten, hiermee leer ik veel van React en Three.js</Desc>
          <Button>Bekijk mijn werk</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who