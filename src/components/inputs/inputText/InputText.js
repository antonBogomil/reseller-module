import React from 'react'
import styled from 'styled-components'

const InputText = props => {
  return <InputTextStyled type={'text'} {...props} />
}
const InputTextStyled = styled.input`
  min-height: 30px;
  width: 100%;
  padding-left: 2px;
  padding-right: 30px;
  box-sizing: border-box;
  border: 3px solid #e6e6f0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: initial;
  transition: box-shadow 1s ease;
`
export default InputText
