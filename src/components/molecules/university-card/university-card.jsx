import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'
import StringUtil from 'utils/string-util'

const propTypes = {
  university: PropTypes.object
}

const defaultProps = {
  university: {
    name      : 'default name',
    country   : 'default country',
    web_pages : [],
    domains   : []
  }
}

const UniversityCard = ({ university }) => (
  <Card data-testid='university-card' className='text-center'>
    <CardHeader>
      { StringUtil.capitalize(university.name) }
    </CardHeader>
    <CardBody>
      <CardTitle>
        { StringUtil.capitalize(university.country) }
      </CardTitle>
      <hr className='my-2' />
      <CardText>
        <a href={ university.web_pages } target='blank' rel='noopener'>
          { university.domains[0] }
        </a>
      </CardText>
    </CardBody>
  </Card>
)

UniversityCard.propTypes = propTypes
UniversityCard.defaultProps = defaultProps
export default UniversityCard
