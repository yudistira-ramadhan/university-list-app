import React from 'react'
import ReactDOM from 'react-dom'
import UniversityList from '../university-list'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UniversityList/>, div)
})

it('renders UniversityList correctly', () => {
  const { getByTestId } = render(<UniversityList />)
  expect(getByTestId('university-list')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<UniversityList />).toJSON()
  expect(tree).toMatchSnapshot()
})