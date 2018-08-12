import React, { Component } from 'react'
import styled from 'styled-components'
import RangeInput from './RangeInput'

const Container = styled.div`
  margin-left: 8px;
`

const Label = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

class BeatsPerMinute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bpm: this.props.bpm || 160
    }
  }
  componentDidMount () {
    if (this.input) {
      this.input.value = this.state.bpm
      this.addEventListeners(this.handleChange)
    }
  }

  componentWillUnmount () {
    if (this.input) {
      this.removeEventListeners(this.handleChange)
    }
  }

  handleChange = event => {
    const { handleChange } = this.props
    this.setState({ bpm: event.target.value })
    handleChange(event)
  }

  addEventListeners (handleChange) {
    this.input.addEventListener('input', handleChange)
    this.input.addEventListener('change', handleChange)
  }

  removeEventListeners (handleChange) {
    this.input.removeEventListener('input', handleChange)
    this.input.removeEventListener('change', handleChange)
  }

  render () {
    const { bpm } = this.state
    return (
      <Container>
        <Label>{`Beats Per Minute - ${bpm}`}</Label>
        <RangeInput
          innerRef={c => (this.input = c)}
          type='range'
          min='80'
          max='200'
        />
      </Container>
    )
  }
}

BeatsPerMinute.defaultProps = {
  handleChange: () => null
}

export default BeatsPerMinute
