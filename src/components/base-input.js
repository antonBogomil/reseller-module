// @flow
import React, { type ComponentType, type Node } from 'react'
import styled from 'styled-components'

type Props = {
  value?: string,
  icon?: Node,
  status?: 'error' | 'success' | 'loading',
  subNode?: Node, // for error messages
  withCounter?: boolean,
  wrapperRef?: any,
}

export const BaseInput = (props: Props) => {
  const { wrapperRef, subNode, status, icon, ...propsTopass } = props
  return (
    <Container innerRef={wrapperRef}>
      <InputWrapper status={status}>
        <Input {...propsTopass} />
        {props.withCounter && <ValueCounter>{props.value ? props.value.length : ''}</ValueCounter>}
        {icon}
      </InputWrapper>
      {subNode && <SubContainer>{subNode}</SubContainer>}
    </Container>
  )
}

const InputWrapper: ComponentType<{ status?: 'error' | 'success' | 'loading' }> = styled.div`
  width: 100%;
  transition: 1s ease;
  border: 3px solid #e6e6f0;
  transition: 1s ease;
  display: flex;
  border-radius: 8px;
  height: 31px;
  box-shadow: ${props => {
    if (props.stataus === 'error') {
      return 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483'
    }
    return 'initial'
  }};
  background-color: ${props => {
    switch (props.status) {
      case 'error':
        return '#ebcdcc'
      case 'success':
        return '#aad4ab'
      case 'loading':
        return 'rgba(0, 0, 0, 0.075)'
      default:
        return 'initial'
    }
  }};
`

const SubContainer = styled.div`
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0 10px;
  padding-right: 30px;
  height: 100%;
  background: transparent;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  &,
  * {
    box-sizing: border-box;
  }
`

const ValueCounter = styled.span`
  color: #21409a;
  transition: 0.3s linear;
  position: absolute;
  background: transparent;
  height: 57%;
  right: 15px;
  top: 9px;
`
