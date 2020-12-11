import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'

const propTypes = {
  handlePageClick : PropTypes.func,
  pagination      : PropTypes.object
}

const defaultProps = {
  handlePageClick : () => { },
  pagination      : {}
}

const Pagination = ({ handlePageClick, pagination }) => (
  <div data-testid='pagination' className='d-flex my-3'>
    <ReactPaginate
      previousLabel={ 'prev' }
      nextLabel={ 'next' }
      breakLabel={ '...' }
      breakClassName={ 'break-me' }
      pageCount={ pagination.pageCount }
      marginPagesDisplayed={ 2 }
      pageRangeDisplayed={ 4 }
      onPageChange={ handlePageClick }
      containerClassName={ 'pagination' }
      subContainerClassName={ 'pages pagination' }
      activeClassName={ 'active' }
    />
  </div>
)

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
export default Pagination