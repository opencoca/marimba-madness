import React, { Component } from 'react'
import styled from 'styled-components'
import BeatGrid from './components/BeatGrid/BeatGrid'
import Synth from './synth/Synth'
import Loading from './components/Loading'
import { availableNotes } from './constants/scale'
import BeatControls from './components/BeatControls/BeatControls'

const Container = styled.div`
  background-color: #232323;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

class App extends Component {
  state = { loading: true }

  componentDidMount () {
    this.synth = new Synth(this.samplerLoaded)
  }

  samplerLoaded = () => {
    this.setState({ loading: false })
    const { BeatGrid } = this.refs
    this.synth.repeat(BeatGrid.trigger, '16n')
  }

  play = () => {
    this.synth.toggle()
  }

  next = () => {
    this.synth.nextBeat()
  }

  render () {
    const { loading } = this.state

    if (loading) {
      return <Loading />
    } else {
      return (
        <Container>
          <BeatGrid
            ref='BeatGrid'
            synth={this.synth}
            scale={availableNotes.reverse()}
          />
          <BeatControls onPlay={this.play} />
        </Container>
      )
    }
  }
}

export default App
