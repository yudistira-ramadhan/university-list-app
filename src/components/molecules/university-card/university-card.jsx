import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

const propTypes = {
  university: PropTypes.object
}

const UniversityCard = ({ university }) => (
  <Card className='text-center'>
    <CardHeader>
      { university.name }
    </CardHeader>
    <CardBody>
      <CardTitle>
        { university.country }
      </CardTitle>
      <CardText>
        { university.web_pages.map((webPage, index)=>(
          <div key={ index }>{ webPage }</div>
        )) }
      </CardText>
    </CardBody>
  </Card>
)

UniversityCard.propTypes = propTypes
export default UniversityCard
