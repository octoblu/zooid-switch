# zooid-switch
A React component to render Zooid like switches/toggles.

[![Build Status](https://travis-ci.org/octoblu/zooid-switch.svg?branch=master)](https://travis-ci.org/octoblu/zooid-switch)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-switch/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-switch)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-switch.svg?style=flat)](https://david-dm.org/octoblu/zooid-switch)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-switch.svg?style=flat)](https://david-dm.org/octoblu/zooid-switch#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-switch.svg?style=flat)](https://npmjs.org/package/zooid-switch)




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
