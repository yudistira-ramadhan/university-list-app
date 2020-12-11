import React from 'react'
import ReactDOM from 'react-dom'
import NamePage from '../name-page'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NamePage/>, div)
})

it('renders NamePage correctly', () => {
  const { getByTestId } = render(<NamePage />)
  expect(getByTestId('name-page')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<NamePage />).toJSON()
  expect(tree).toMatchSnapshot()
})