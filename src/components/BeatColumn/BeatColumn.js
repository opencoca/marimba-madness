import React, { Component } from 'react'
import styled from 'styled-components'
import BeatBox from './BeatBox'
import Subject from '../../observer/Subject'

const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: ${props => props.background};
  margin-left: ${props => (props.id % 2 == 1 ? 0 : 2)}px;
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
    const { rows } = this.props
    const activeBoxes = new Array(rows).fill(false)
    const activeNotes = []
    this.state = { activeBoxes, activeNotes }
  }

  toggleActive = i => () => {
    const { scale } = this.props
    this.setState(prev => {
      const activeBoxes = [...prev.activeBoxes]
      activeBoxes[i] = !activeBoxes[i]

      const activeNotes = scale.filter((note, index) => activeBoxes[index])

      return { activeBoxes, activeNotes }
    })
  }

  playBeat = time => {
    const { synth } = this.props
    const { activeNotes } = this.state
    activeNotes.forEach(note => {
      synth && synth.playNote(note, time)
    })
  }

  resetColumn = () => {
    const { rows } = this.props
    this.setState({ activeBoxes: new Array(rows).fill(false), activeNotes: [] })
  }

  componentDidMount () {
    Subject.subscribe('reset', this.resetColumn)
  }

  componentWillUnmount () {
    Subject.unsubscribe('reset', this.resetColumn)
  }

  renderBoxes = () => {
    const { scale, foreground } = this.props
    const boxes = []
    for (let i = 0; i < scale.length; i++) {
      boxes.push(
        <BeatBox
          inactiveColor={foreground}
          key={i.toString(10)}
          note={scale[i]}
          active={this.state.activeBoxes[i]}
          onClick={this.toggleActive(i)}
        />
      )
    }
    return boxes
  }

  render () {
    const { playing, background, id } = this.props
    return (
      <Container background={background} id={id}>
        {this.renderBoxes()}
        <Overlay playing={playing} />
      </Container>
    )
  }
}

export default BeatColumn
