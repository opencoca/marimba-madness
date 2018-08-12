import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  -webkit-transition: box-shadow 200ms;
  transition: box-shadow 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 3px #FFFFFF40;
  }
`

const Play = styled.i`
  font-size: 24px;
  color: #363636;
  margin-left: ${props => (props.playing ? 0 : 4)}px;
`

class BeatToggle extends Component {
  state = { playing: false }

  onClick = () => {
    const { onClick } = this.props
    this.setState(
      prev => ({
        playing: !prev.playing
      }),
      onClick
    )
  }

  render () {
    const { playing } = this.state
    return (
      <Container onClick={this.onClick}>
        <Play
          playing={playing}
          className={`fas ${playing ? 'fa-pause' : 'fa-play'}`}
        />
      </Container>
    )
  }
}

BeatToggle.defaultProps = {
  onClick: () => null
}

export default BeatToggle
