import React from 'react'
import { Col, Row } from 'reactstrap'
import { UniversityCard, Pagination } from 'components/molecules'
import PropTypes from 'prop-types'

const propTypes = {
  universities    : PropTypes.array,
  handlePageClick : PropTypes.func,
  pagination      : PropTypes.object
}

const UniversityListItems = ({ universities }) => {


  const Items = universities.map((university, index) => (
    <Col
      xs={ 6 } md={ 3 }
      key={ `university_col_${ index }` }
      className='mt-4'
    >
      <UniversityCard
        key={ 'university_card' + `${ index }` }
        university={ university }
      />
    </Col>
  )
  
  )

  return Items
}

const UniversityList = ({ universities, handlePageClick, pagination }) => (
  <>
    <Row>
      <UniversityListItems universities={ universities } />
    </Row>
    <Pagination 
      handlePageClick={ handlePageClick }
      pagination={ pagination }
    />
      
  </>
)

UniversityList.propTypes = propTypes
export default UniversityList