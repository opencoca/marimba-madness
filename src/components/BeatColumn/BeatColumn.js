import React, { Component } from 'react'
import styled from 'styled-components'
import BeatBox from './BeatBox'

const Tone = require('tone')

const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: black;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00FFFF;
  pointer-events: none;
  opacity: ${props => (props.playing ? 0.3 : 0)};
`

class BeatColumn extends Component {
  constructor (props) {
    super(props)
    const active = []
    const { rows } = this.props
    for (let i = 0; i < rows; i++) {
      active.push(false)
    }

    this.state = { active }
  }

  toggleActive = i => () => {
    this.setState(prev => {
      const actives = [...prev.active]
      actives[i] = !actives[i]
      return { active: actives }
    })
  }

  playBeat = time => {
    const { scale, sampler } = this.props
    const { active } = this.state
    const notes = scale.filter((note, index) => active[index])
    notes.forEach(note => {
      sampler.triggerAttackRelease(note, '8n', time)
    })
  }

  renderBoxes = () => {
    const { scale } = this.props
    const boxes = []
    for (let i = 0; i < scale.length; i++) {
      boxes.push(
        <BeatBox
          key={i.toString(10)}
          note={scale[i]}
          active={this.state.active[i]}
          onClick={this.toggleActive(i)}
        />
      )
    }
    return boxes
  }

  render () {
    const { playing } = this.props
    return (
      <Container>{this.renderBoxes()}<Overlay playing={playing} /></Container>
    )
  }
}

export default BeatColumn
