// @flow
import styled from 'styled-components'

export const ClassicButton = styled.button`
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: #f0bd61 #f4ca80;
  padding: 0px 5px;
  min-width: 74px;
  font: 700 12px/28px Verdana, Arial, sans-serif;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  height: 32px;
  cursor: pointer;
  display: inline-block;
  background: linear-gradient(#ffde98 60%, #f9c45a 40%);
  &:hover {
    background: linear-gradient(#f9c45a 40%, #ffde98 60%);
  }
`
