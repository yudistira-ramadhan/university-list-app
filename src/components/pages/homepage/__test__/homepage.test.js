import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from '../homepage'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Homepage/>, div)
})

it('renders Homepage correctly', () => {
  const { getByTestId } = render(<Homepage />)
  expect(getByTestId('homepage')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<Homepage />).toJSON()
  expect(tree).toMatchSnapshot()
})