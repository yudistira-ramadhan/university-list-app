import React from 'react'
import ReactDOM from 'react-dom'
import SearchField from '../search-field'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<SearchField />, div)
})

it('renders search field correctly', () => {
  const { getByTestId, getByPlaceholderText } = render(<SearchField />)

  expect(getByTestId('search-button')).toBeTruthy()

  expect(getByPlaceholderText('default placeholder')).toBeTruthy()
})

describe('input value', ()=> {
  it('updates on change', ()=> {

    const { getByPlaceholderText } = render(<SearchField/>)

    const searchInput = getByPlaceholderText('default placeholder')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})

describe('search button', ()=>{
  describe('with empty value', ()=> {
    it('does not trigger request search function', ()=> {
      const onHandleClick = jest.fn()

      const { getByTestId } = render(<SearchField onClick={ onHandleClick } />)

      fireEvent.click(getByTestId('search-button'))

      expect(onHandleClick).not.toHaveBeenCalled()
    })
  })

  describe('with value inside field', ()=>{
    it('triggers onHandleChange function', ()=>{
      const onHandleChange = jest.fn()

      const { getByTestId, getByPlaceholderText } = render(<SearchField onHandleChange={ onHandleChange } />)

      const searchInput = getByPlaceholderText('default placeholder')

      fireEvent.change(searchInput, { target: { value: 'test' } })

      fireEvent.click(getByTestId('search-button'))

      expect(onHandleChange).toHaveBeenCalled()
    })
  })
})

it('matches snapshot', () => {
  const tree = renderer.create(<SearchField />).toJSON()
  expect(tree).toMatchSnapshot()
})