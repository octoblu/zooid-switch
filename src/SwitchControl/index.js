import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

import styles from './styles.css'

const propTypes = {
  on: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
}

const defaultProps = {}

const SwitchControl = ({ disabled, on }) => {
  const classes = classNames(
    styles.control,
    { [`${styles['is-on']}`]: on },
    { [`${styles['is-disabled']}`]: disabled }
  )

  return (
    <div className={classes}>
      <span className={styles.bar} />
      <Motion style={{ x: spring(on ? 16 : 0, { stiffness: 220, damping: 26 }) }}>
        {({ x }) =>
          <span
            className={styles.thumb}
            style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}
          />
        }
      </Motion>
    </div>
  )
}

SwitchControl.propTypes    = propTypes
SwitchControl.defaultProps = defaultProps

export default SwitchControl
