import React, { Component } from 'react'
import styled from 'styled-components'
import BeatColumn from '../BeatColumn/BeatColumn'
import BeatLabels from './BeatLabels'
const Tone = require('tone')

const Container = styled.div`
  background-color: #232323;
  flex: 1;
  width: 100%;
  display: flex;
`

class BeatGrid extends Component {
  constructor (props) {
    super(props)
    this.columns = Math.floor(window.innerWidth / 80)
    this.state = {
      count: -1
    }
  }

  trigger = time => this.updateCount(time)

  updateCount = time => {
    const cols = this.columns
    const newCount = this.state.count + 1
    this.setState(prev => ({ count: prev.count + 1 }), this.playBeat(time))
  }

  playBeat = time => () => {
    const { count } = this.state
    this.refs[count % this.columns].playBeat(time)
  }

  render () {
    const cols = []
    const { count } = this.state
    const { scale, synth } = this.props

    for (let i = 0; i < this.columns; i++) {
      const keyRef = i.toString(10)
      cols.push(
        <BeatColumn
          ref={keyRef}
          key={keyRef}
          scale={scale}
          playing={count % this.columns === i}
          synth={synth}
        />
      )
    }

    return (
      <Container>
        <BeatLabels scale={scale} />
        {cols}
      </Container>
    )
  }
}

BeatGrid.displayName = 'BeatGrid'
BeatGrid.defaultProps = {
  columns: 13,
  scale: [
    'C2',
    'D2',
    'E2',
    'F2',
    'G2',
    'A2',
    'B2',
    'C3',
    'D3',
    'E3',
    'F3',
    'G3',
    'A3',
    'B3',
    'C4'
  ].reverse()
}

export default BeatGrid
