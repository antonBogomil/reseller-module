// @flow
import React, { Component } from 'react'
import classNames from 'classnames'

class Button extends Component {
  static defaultProps = {
    onClick: () => void 0,
    className: '',
    style: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      active: this.props.isActive || false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isActive !== this.props.isActive) {
      this.setState({
        active: newProps.isActive,
      })
    }
  }

  handleClick(e) {
    this.setState({
      active: !this.state.active,
    })

    this.props.onClick(e)
  }

  render() {
    const {
      className, onClick, buttonRef, isActive, ...rest
    } = this.props

    return (
      <button
        className={classNames({
          active: this.state.active,
          [className]: true,
        })}
        onClick={this.handleClick}
        style={this.props.style}
        ref={buttonRef}
        type="button"
        {...rest}
      >
        {this.props.children}
      </button>
    )
  }
}

export { Button }
