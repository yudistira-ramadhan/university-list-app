import React from 'react'
import ReactDOM from 'react-dom'
import SubscribeField from '../subscribe-field'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<SubscribeField />, div)
})

it('renders subscribe field correctly', () => {
  const { getByTestId, getByPlaceholderText } = render(<SubscribeField />)

  expect(getByTestId('subscribe-button')).toBeTruthy()

  expect(getByPlaceholderText('Enter your email...')).toBeTruthy()
})

describe('input value', ()=> {
  it('updates on change', ()=> {

    const { getByPlaceholderText } = render(<SubscribeField/>)

    const emailInput = getByPlaceholderText('Enter your email...')

    fireEvent.change(emailInput, { target: { value: 'test@testmail.com' } })

    expect(emailInput.value).toBe('test@testmail.com')
  })
})

describe('search button', ()=>{
  describe('with empty value', ()=> {
    it('does not trigger request search function', ()=> {
      const onHandleClick = jest.fn()

      const { getByTestId } = render(<SubscribeField onHandleClick={ onHandleClick } />)

      fireEvent.click(getByTestId('subscribe-button'))

      expect(onHandleClick).not.toHaveBeenCalled()
    })
  })

  describe('with value inside field', ()=>{
    describe('with non email value', () => {
      it('does not trigger onHandleClick function', ()=>{
        const onHandleClick = jest.fn()
        global.URL.createObjectURL = jest.fn()
  
        const { getByTestId, getByPlaceholderText } = render(<SubscribeField onHandleClick={ onHandleClick } />)
  
        const emailInput = getByPlaceholderText('Enter your email...')
  
        fireEvent.change(emailInput, { target: { value: 'test' } })
  
        fireEvent.click(getByTestId('subscribe-button'))
  
        expect(onHandleClick).not.toHaveBeenCalled()
      })
    })
  })
})

it('matches snapshot', () => {
  const tree = renderer.create(<SubscribeField />).toJSON()
  expect(tree).toMatchSnapshot()
})