import React from 'react'
import { Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'

const propTypes = {
  name           : PropTypes.string,
  placeholder    : PropTypes.string,
  onHandleChange : PropTypes.func,
  onHandleClick  : PropTypes.func
}

const SearchField = ({ name, placeholder, onHandleChange, onHandleClick }) => (
  <div className='d-flex'>
    <Input
      className='mr-2'
      type='text'
      name={ name }
      placeholder={ placeholder }
      onChange={ onHandleChange }
    />
    <Button
      color='primary'
      onClick={ onHandleClick }
      outline
    >
      Search
    </Button>
  </div>
)

SearchField.propTypes = propTypes
export default SearchField