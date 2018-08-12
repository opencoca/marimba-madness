import React from 'react'
import styled from 'styled-components'
import BeatToggle from './BeatToggle'
import BeatsPerMinute from './BeatsPerMinute'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BeatControls = ({ onPlay, adjustBPM }) => (
  <Container>
    <BeatToggle onClick={onPlay} />
    <BeatsPerMinute handleChange={adjustBPM} />
  </Container>
)

export default BeatControls
