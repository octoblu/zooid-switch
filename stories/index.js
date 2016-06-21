import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Switch from '../src'

storiesOf('Switch', module)
  .addWithInfo('Simple. No Props? No Problems.', 'This is the switch with no props passed in', () => (
    <Switch label="Simple" />
  ))
  .addWithInfo('On by default', 'This is the switch preset in the on position', () => (
    <Switch on label="On by default" />
  ))
  .addWithInfo('Disabled', 'This is the disabled basic switch', () => (
    <Switch disabled label="Disabled Switch" />
  ))
  .addWithInfo('onChange', 'This is the switch with a callback for onChange events', () => (
    <Switch onChange={action('onChange')} label="With onChange callback" />
  ))
