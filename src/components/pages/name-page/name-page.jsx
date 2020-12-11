import React, { useState } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import { SearchField } from 'components/molecules'
import { UniversityList } from 'components/organisms'
import UniListApi from 'api/uni-list-api'

const NamePage = () => {
  const [universities, setUniversities] = useState([])
  const [inputValue, setinputValue] = useState('')
  const [pagination, setPagination] = useState({
    perPage   : 12,
    pageCount : 0
  })

  const fetchUniversityList = async (offset = 0) => {
    await UniListApi.getByName(inputValue)
      .then((response) => {
        const data = response.data
        const slicedData = data.slice(offset, offset + pagination.perPage)
        setUniversities(slicedData)
        setPagination((prevState) => ({
          ...prevState,
          pageCount: Math.ceil(data.length / pagination.perPage)
        }))
      })
      .catch(() => alert('error while fetching the university list!!!'))
  }

  const onHandleChange = (e) => {
    setinputValue(e.target.value)
  }

  const onHandleClick = () => {
    if(inputValue !== ''){
      fetchUniversityList()
    }
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = Math.ceil(selectedPage * pagination.perPage)
    fetchUniversityList(offset)
  }

  return (
    <Container data-testid='name-page'>
      <Jumbotron className='text-center'>
        <h2 className='font-weight-bolder'>
        University List by Name
        </h2>
        <hr className='my-4' />
        <p className='lead'>
        You can search the University from around the World.
        </p>
        <div className='text-center'>
          <SearchField 
            name='university' 
            placeholder='Input university name...' 
            onHandleChange={ onHandleChange }
            onHandleClick={ onHandleClick }
          />
        </div>
      </Jumbotron>
      <UniversityList 
        universities={ universities }
        pagination={ pagination }
        handlePageClick={ handlePageClick }
      />
    </Container>
  )
}
export default NamePage