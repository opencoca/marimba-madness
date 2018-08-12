import React, { Component } from 'react'
import styled from 'styled-components'
import BeatGrid from './components/BeatGrid/BeatGrid'

const Tone = require('tone')

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
    this.sampler = new Tone.Sampler(
      {
        A2: 'A2.mp3',
        A3: 'A3.mp3',
        A4: 'A4.mp3',
        A5: 'A5.mp3',
        A6: 'A6.mp3',
        C2: 'C2.mp3',
        C3: 'C3.mp3',
        C4: 'C4.mp3',
        C5: 'C5.mp3',
        C6: 'C6.mp3',
        'D#2': 'Ds2.mp3',
        'D#3': 'Ds3.mp3',
        'D#4': 'Ds4.mp3',
        'D#5': 'Ds5.mp3',
        'D#6': 'Ds6.mp3',
        'F#2': 'Fs2.mp3',
        'F#3': 'Fs3.mp3',
        'F#4': 'Fs4.mp3',
        'F#5': 'Fs5.mp3',
        'F#6': 'Fs6.mp3'
      },
      this.samplerLoaded,
      'audio/marimba/'
    )
  }

  samplerLoaded = () => {
    this.sampler.toMaster()
    this.sampler.volume.setValueAtTime(-20, 0)
    this.setState({ loading: false })
    console.log('loaded samples')
    const { BeatGrid } = this.refs
    Tone.Transport.scheduleRepeat(BeatGrid.trigger, '16n')
  }

  play = () => {
    Tone.Transport.toggle()
  }

  render () {
    const { loading } = this.state
    return loading
      ? null
      : <Container>
        <BeatGrid ref='BeatGrid' sampler={this.sampler} />
        <button onClick={this.play}>play</button>
      </Container>
  }
}

export default App
