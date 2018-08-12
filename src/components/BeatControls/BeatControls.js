import React from 'react'
import styled from 'styled-components'
import BeatToggle from './BeatToggle'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BeatControls = ({ onPlay, onNext }) => (
  <Container>
    <BeatToggle onClick={onPlay} />
  </Container>
)

export default BeatControls
