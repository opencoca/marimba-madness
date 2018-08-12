import React from 'react'
import styled from 'styled-components'
import BeatToggle from './BeatToggle'
import BeatsPerMinute from './BeatsPerMinute'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 8px;
`

const BeatControls = ({ onPlay, bpm, adjustBPM }) => (
  <Container>
    <BeatToggle onClick={onPlay} />
    <BeatsPerMinute bpm={bpm} handleChange={adjustBPM} />
  </Container>
)

export default BeatControls
