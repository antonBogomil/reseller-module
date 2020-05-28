import styled, { css } from 'styled-components'
import React from 'react'

const Menu = React.forwardRef((props, ref) => {
  return <BaseMenu ref={ref} {...props} />
})
const Container = styled.div`
  position: relative;
`
const Drop = styled.div`
  position: absolute;
  top: 100%;
  z-index: 100;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  border: 3px solid #e4e7ee;
  border-top: 0;
  background: #fff;
  margin-top: -3px;
  border-radius: 0 0 6px 6px;
  background-clip: padding-box;
  ${props =>
    props.isOpen &&
    css`
      margin-top: -3px;
    `}
`

const Input = styled.input`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 1px 0;
  padding: 4px 20px 4px 5px;
  width: 100%;
  height: auto;
  outline: 0;
  border: 1px solid #e4e7ee;
  background: url(../img/chosen-sprite.png) no-repeat 100% -20px;
  font-size: 1em;
  font-family: sans-serif;
  line-height: normal;
  border-radius: 0;
`
const MenuItem = styled.li`
  margin: 0;
  padding: 5px 6px;
  line-height: 15px;
  min-height: 15px;
  cursor: pointer;
  ${props =>
    props.isActive &&
    css`
      background: #21409a;
      color: #fff;
    `}
`
const BaseMenu = styled.ul`
  display: block;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0 4px 4px 0;
  padding: 0 0 0 4px;
  max-height: 240px;
`
const ToggleIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 3px;
  display: block;
  width: 18px;
  height: 6px;
  background: url(../img/interface/select-arrow.png) no-repeat;
  ${props =>
    props.isOpen &&
    css`
      background-position: 0 100%;
    `}
`
const ToggleButton = styled.div`
  background: #fff;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0 0 0 8px;
  height: 25px;
  border: 3px solid #e4e7ee;
  border-radius: 6px;
  color: #444;
  text-decoration: none;
  white-space: nowrap;
  line-height: 25px;
  z-index: 100;
  cursor: pointer;
  ${props =>
    props.isOpen &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`
export { Menu, MenuItem, Input, ToggleIcon, ToggleButton, Drop, Container }
