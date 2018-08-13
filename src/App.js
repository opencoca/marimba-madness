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
  state = {
    loading: true,
    availableNotes: availableNotes,
    columns: Math.floor(window.innerWidth / 100)
  }
  initialBPM = 160

  componentDidMount () {
    this.synth = new Synth(this.samplerLoaded)
    this.synth.setBPM(this.initialBPM)
  }

  samplerLoaded = () => {
    this.setState({ loading: false })
    const { BeatGrid } = this.refs
    this.synth.repeat(BeatGrid.trigger, '8n')
  }

  play = () => {
    this.synth.toggle()
  }

  next = () => {
    this.synth.nextBeat()
  }

  adjustBPM = event => {
    this.synth.setBPM(event.target.value)
  }

  changeColumns = diff => {
    const currentCols = this.state.columns
    if (currentCols + diff < 4 || currentCols + diff > 30) return

    this.setState({ columns: currentCols + diff })
  }

  render () {
    const { loading, columns } = this.state

    if (loading) {
      return <Loading />
    } else {
      return (
        <Container>
          <BeatGrid
            ref='BeatGrid'
            synth={this.synth}
            scale={availableNotes}
            columns={columns}
          />
          <BeatControls
            onPlay={this.play}
            changeColumns={this.changeColumns}
            adjustBPM={this.adjustBPM}
            bpm={this.initialBPM}
          />
        </Container>
      )
    }
  }
}

export default App
