import React, { Component } from 'react'
import styled from 'styled-components'
import BeatGrid from './components/BeatGrid/BeatGrid'
import Synth from './synth/Synth'
import Loading from './components/Loading'

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

  render () {
    const { loading } = this.state
    return loading
      ? <Loading />
      : <Container>
        <BeatGrid ref='BeatGrid' synth={this.synth} />
        <button onClick={this.play}>play</button>
      </Container>
  }
}

export default App
