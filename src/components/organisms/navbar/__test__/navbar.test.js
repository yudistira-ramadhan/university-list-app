import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../navbar'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navbar/>, div)
})

it('renders Navbar correctly', () => {
  const { getByTestId } = render(<Navbar />)
  expect(getByTestId('navbar')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON()
  expect(tree).toMatchSnapshot()
})