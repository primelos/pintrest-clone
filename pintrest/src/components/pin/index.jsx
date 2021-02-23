import React from 'react'
import { Wrapper, Container } from './pin.styles'



const Pin = ({ urls }) => {
  
  return (
    <Wrapper>
      <Container>
        <img
          src={urls?.regular}
          alt="pin"
        />
      </Container>
    </Wrapper>
  );
}

export default Pin
