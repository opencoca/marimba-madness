import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  -webkit-transition: box-shadow 200ms;
  transition: box-shadow 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 3px #FFFFFF40;
  }
`

const Arrows = styled.i`
  font-size: 18px;
  color: #363636;
`

const BeatColumn = ({ mode, onClick }) => (
  <Container onClick={onClick}>
    <Arrows
      className={`fas fa-${mode === 'add' ? 'plus' : 'minus'}`}
      mode={mode}
    />
  </Container>
)

export default BeatColumn
