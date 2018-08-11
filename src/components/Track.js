import React, { Component } from 'react'
import styled from 'styled-components'
import Note from './Note'

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Track extends Component {
  constructor (props) {
    super(props)
    const { song } = this.props
    this.state = {
      song: song.map(note => ({ ...note, audio: new Audio() })).map(note => {
        note.audio.src = `audio/${note.note}.wav`
        return note
      })
    }
  }

  componentDidMount () {
    this.playNote()
  }

  shiftUp = () => {
    if (this.state.song.length > 1) {
      this.setState(
        ({ song }) => ({
          song: [song[1], ...song.slice(2), song[0]]
        }),
        this.playNote
      )
    } else {
      this.playNote()
    }
  }

  playNote = () => {
    const { song: [{ audio }], song } = this.state
    if (audio) {
      audio.currentTime = 0
      audio.play()
      setTimeout(this.shiftUp, this.props.speed * this.state.song[0].beats)
    }
  }

  render () {
    const { song } = this.state
    return (
      <Container>
        {song.map(({ note }, index) => <Note key={'' + index} value={note} />)}
      </Container>
    )
  }
}

export default Track
