import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from '../pagination'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Pagination/>, div)
})

it('renders pagination correctly', () => {
  const { getByTestId } = render(<Pagination />)
  expect(getByTestId('pagination')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<Pagination />).toJSON()
  expect(tree).toMatchSnapshot()
})