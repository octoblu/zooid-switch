import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'

import SwitchControl from '../SwitchControl'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  on: PropTypes.bool,
}

const defaultProps = {
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
    const { className, disabled, label, onChange } = this.props
    const { on } = this.state

    const classes = classNames(
      styles.root,
      { [`${styles['is-on']}`]: on },
      { [`${styles['is-disabled']}`]: disabled },
      className
    )

    if (disabled) this.handleClick = noop

    return (
      <div className={classes} onClick={this.handleClick}>
        <SwitchControl on={on} disabled={disabled} />
        <label>{label}</label>
        <input
          onChange={noop}
          type="checkbox"
          checked={on}
          disabled={disabled}
          className={styles.checkbox}
        />
      </div>
    )
  }
}

Switch.propTypes    = propTypes
Switch.defaultProps = defaultProps

export default Switch
