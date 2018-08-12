import React from 'react'
import styled from 'styled-components'
import BeatToggle from './BeatToggle'
import BeatsPerMinute from './BeatsPerMinute'
import BeatColumn from './BeatColumn'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 8px;
`

const BeatControls = ({ onPlay, bpm, adjustBPM, changeColumns }) => (
  <Container>
    <BeatColumn mode='subtract' onClick={() => changeColumns(-1)} />
    <BeatToggle onClick={onPlay} />
    <BeatColumn mode='add' onClick={() => changeColumns(1)} />
    <BeatsPerMinute bpm={bpm} handleChange={adjustBPM} />
  </Container>
)

export default BeatControls
