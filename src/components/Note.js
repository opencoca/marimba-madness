import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Note = props => <Container>{props.value}</Container>

export default Note
