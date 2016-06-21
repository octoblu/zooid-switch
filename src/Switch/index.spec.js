import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import noop from 'lodash.noop'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Switch from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Switch />', () => {
  describe('when componentMounts', () => {
    it('should map on prop to state', () => {
      const sut = mount(<Switch />)
      expect(sut).to.have.prop('on', false)
      expect(sut).to.have.state('on', false)
    })

    it('should render a checkbox', () => {
      const sut = shallow(<Switch />)
      expect(sut).to.contain(
        <input
          type="checkbox"
          checked={false}
          onChange={noop}
          disabled={false}
          className={styles.checkbox}
        />
      )
    })
  })

  describe('when given an onChange callback as a prop', () => {
    it('should call the callback...errrrm, on changes', () => {
      const handleChange = sinon.spy()
      const sut = shallow(<Switch onChange={handleChange} />)
      sut.simulate('click')
      expect(handleChange).to.have.been.called
    })
  })


  describe('when given a label as a prop', () => {
    it('should render the label', () => {
      const sut = shallow(<Switch label="cats4ever" />)
      expect(sut).to.contain(<label>cats4ever</label>)
    })
  })

  describe('when label prop is not specified', () => {
    it('should default the label prop to an empty string', () => {
      const sut = mount(<Switch />)
      expect(sut).to.have.prop('label', '')
    })
  })

  describe('when disabled prop is truthy', () => {
    let sut

    beforeEach(() => {
      sut = shallow(<Switch disabled />)
    })

    it('should render a disabled switch', () => {
      expect(sut).to.have.className(styles.disabled)
    })

    describe('when you click on a switch', () => {
      it('should not handle the click', () => {
        sut.simulate('click')
        expect(sut).to.have.state('on', false)
      })
    })
  })

  describe('when disabled prop is falsy', () => {
    let sut

    beforeEach(() => {
      sut = shallow(<Switch />)
    })

    it('should not render a disabled switch', () => {
      expect(sut).to.not.have.className(styles.disabled)
    })

    describe('when you click on a switch', () => {
      it('should handle the click', () => {
        sut.simulate('click')
        expect(sut).to.have.state('on', true)
      })
    })
  })

  describe('when given a className prop', () => {
    it('should merge classNames', () => {
      const sut = shallow(<Switch className="BangBang" />)
      expect(sut).to.have.className('BangBang')
    })
  })

  describe('when given a on prop that is truthy', () => {
    it('should render the switch in the correct state', () => {
      const sut = mount(<Switch on />)
      expect(sut).to.have.prop('on', true)
      expect(sut).to.have.className(styles['is-on'])
      expect(sut.find('input[type="checkbox"]')).to.be.checked()
    })
  })

  describe('when no on prop is specified or falsy', () => {
    it('should default to false', () => {
      const sut = mount(<Switch />)
      expect(sut).to.have.prop('on', false)
      expect(sut).to.not.have.className(styles['is-on'])
      expect(sut.find('input[type="checkbox"]')).to.not.be.checked()
    })
  })
})
