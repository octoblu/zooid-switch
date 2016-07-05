# zooid-switch
A React component to render Zooid like switches/toggles.

[![Build Status](https://travis-ci.org/octoblu/zooid-switch.svg?branch=master)](https://travis-ci.org/octoblu/zooid-switch)
[![npm version](https://badge.fury.io/js/zooid-switch.svg)](http://badge.fury.io/js/zooid-switch)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-switch.png)](https://codeclimate.com/github/octoblu/zooid-switch)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)



### Install
```
npm install --save zooid-switch
```
### Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| alignLabel| string |  left   | Sets align property for the switch label. Options: **left**, **right** |
| className | string |         | Additional css classes for your switch|
| disabled  | bool   |  false  | Makes the switch un-switchable  |
| label     | string |         | Label for the switch |
| onChange  | func   |         | Custom callback function to be fired each time the switch is fired |
| on        | bool   |  false  | The current state of the switch |

### Example
```jsx
<Switch label="Switch Me On" />
```
