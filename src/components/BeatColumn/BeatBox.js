import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 0.5px;
  background-color: ${props => (props.active ? props.activeColor : props.inactiveColor)};
`

const pickActiveColor = note => {
  let letter = note.split('')[0]
  switch (letter) {
    case 'A':
      return '#DFCC2B'
    case 'B':
      return '#3BD531'
    case 'C':
      return '#2929DF'
    case 'D':
      return '#DF9329'
    case 'E':
      return '#6CBBD5'
    case 'F':
      return '#C82F3C'
    case 'G':
      return '#8350DF'
    default:
      return 'black'
  }
}

const BeatBox = ({ active, note, onClick, inactiveColor }) => {
  const activeColor = pickActiveColor(note)
  return (
    <Container
      active={active}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      onClick={onClick}
    />
  )
}

BeatBox.defaultProps = {
  active: false,
  activeColor: 'red',
  onClick: () => null
}

export default BeatBox
