import React from 'react'
import ReactDOM from 'react-dom'
import UniversityCard from '../university-card'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UniversityCard />, div)
})

it('renders university card correctly', () => {
  const { getByTestId } = render(<UniversityCard />)
  expect(getByTestId('university-card')).toBeTruthy()
})

it('matches snapshot', () => {
  const tree = renderer.create(<UniversityCard />).toJSON()
  expect(tree).toMatchSnapshot()
})