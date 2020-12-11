import React from 'react'
import ReactDOM from 'react-dom'
import DetailPage from '../detail-page'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DetailPage/>, div)
})

it('renders DetailPage correctly', () => {
  const { getByTestId } = render(<DetailPage />)
  expect(getByTestId('detail-page')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<DetailPage />).toJSON()
  expect(tree).toMatchSnapshot()
})