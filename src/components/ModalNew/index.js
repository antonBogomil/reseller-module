import React, { Component } from 'react'
import { Button } from '../Button'
import './style.scss'

export default class ModalWindowNew extends Component {
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isVisible !== this.props.isVisible && !nextProps.isVisible) {
      this.props.hideModal()
    }
  }

  render() {
    const { isVisible, isCloseBtn } = this.props
    return (
      <>
        {isVisible && (
          <div className="new-modal">
            <div className="modal-inner">
              <div className="modal-inner-wrapper">{this.props.children}</div>
              {isCloseBtn && (
                <Button onClick={this.props.hideModal} className="r-modal-exit-button">
                  <i
                    className="r-modal-exit-button-icon fa fa-2x fa-window-close"
                    aria-hidden="true"
                  />
                </Button>
              )}
            </div>
            <div className="modal-overlay" onClick={this.props.hideModal} />
          </div>
        )}
      </>
    )
  }
}
