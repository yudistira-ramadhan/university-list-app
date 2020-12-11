import React from 'react'
import ReactDOM from 'react-dom'
import CountryPage from '../country-page'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CountryPage/>, div)
})

it('renders CountryPage correctly', () => {
  const { getByTestId } = render(<CountryPage />)
  expect(getByTestId('country-page')).toBeTruthy()
})

describe('input value', ()=> {
  it('updates on change', ()=> {

    const { getByPlaceholderText } = render(<CountryPage/>)

    const searchInput = getByPlaceholderText('Input country name...')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})

it('matches snapshot', () => {
  const tree = renderer.create(<CountryPage />).toJSON()
  expect(tree).toMatchSnapshot()
})