import React from 'react'
import { Wrapper, Container } from "./mainboard.styles";
import Pin from '../pin'

function MainBoard({ pins }) {
  return (
    <Wrapper>
      <Container >
        {
          pins.map((pin, i) => {
            let { urls } = pin;
            return (
              <Pin key={i} urls={urls}/>
            )
          })
        }
        
      </Container>
    </Wrapper>
  )
}

export default MainBoard
