import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'

import SwitchControl from '../SwitchControl'

import styles from './styles.css'

const propTypes = {
  alignLabel: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  on: PropTypes.bool,
}

const defaultProps = {
  alignLabel: 'left',
  disabled: false,
  label: '',
  onChange: noop,
  on: false,
}

class Switch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      on: this.props.on,
    }
  }

  handleClick = () => {
    this.setState({
      on: !this.state.on
    }, () => {
      this.props.onChange(this.state.on)
    })
  }

  render() {
    const { alignLabel, className, disabled, label, onChange } = this.props
    const { on } = this.state

    const classes = classNames(
      styles.root,
      { [`${styles['is-on']}`]: on },
      { [`${styles['is-disabled']}`]: disabled },
      styles[`alignLabel-${alignLabel}`],
      className
    )

    if (disabled) this.handleClick = noop

    return (
      <div className={classes} onClick={this.handleClick}>
        <label>{label}</label>
        <SwitchControl on={on} disabled={disabled} />
      </div>
    )
  }
}

Switch.propTypes    = propTypes
Switch.defaultProps = defaultProps

export default Switch
