import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import styles from './styles.css'
import Switch from '../src'

storiesOf('Switch', module)
  .addWithInfo('Simple. No Props? No Problems.',
  'This is the switch with no props passed in', () => (
    <div className={styles.Page}>
      <Switch label="Simple" />
    </div>
  ))
  .addWithInfo('On by default', 'This is the switch preset in the on position', () => (
    <div className={styles.Page}>
      <Switch on label="On by default" />
    </div>
  ))
  .addWithInfo('Disabled', 'This is the disabled basic switch', () => (
    <div className={styles.Page}>
      <Switch disabled label="Disabled Switch" />
    </div>
  ))
  .addWithInfo('onChange', 'This is the switch with a callback for onChange events', () => (
    <div className={styles.Page}>
      <Switch onChange={action('onChange')} label="With onChange callback" />
    </div>
  ))
  .addWithInfo('Label Alignment', 'This is the switch with the label aligned to the right', () => (
    <div className={styles.Page}>
      <Switch alignLabel="right" label="Right aligned label " />
    </div>
  ))
