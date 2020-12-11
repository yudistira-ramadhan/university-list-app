import React, { useState } from 'react'
import { Container, Jumbotron, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap'
import { UniversityList } from 'components/organisms'
import UniListApi from 'api/uni-list-api'

const DetailPage = () => {
  const [universities, setUniversities] = useState([])
  const [inputValue, setinputValue] = useState({
    name    : '',
    country : ''
  })
  const [pagination, setPagination] = useState({
    perPage   : 12,
    pageCount : 0
  })

  const fetchUniversityList = async (offset = 0) => {
    await UniListApi.get(inputValue.name, inputValue.country)
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

  const onHandleNameChange = (e) => {
    setinputValue((prevState)=>({ 
      ...prevState,
      name: e.target.value 
    }))
  }

  const onHandleCountryChange = (e) => {
    setinputValue((prevState)=>({ 
      ...prevState,
      country: e.target.value 
    }))
  }

  const onHandleClick = () => {
    if(inputValue.name !== '' || inputValue.country !==''){
      fetchUniversityList()
    }
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = Math.ceil(selectedPage * pagination.perPage)
    fetchUniversityList(offset)
  }

  return (
    <Container data-testid='detail-page'>
      <Jumbotron className='text-center'>
        <h2 className='font-weight-bolder'>
        University List by Detailed Input
        </h2>
        <hr className='my-4' />
        <p className='lead'>
        You can search the University by inputting specific University name and Country.
        </p>
        <div className='text-center'>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText  
                className='bg-info text-light' 
              >
                Name
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name='university' 
              placeholder='Input university name...' 
              onChange={ onHandleNameChange }
            />
          </InputGroup>
          <InputGroup className='mt-2'>
            <InputGroupAddon addonType="prepend">
              <InputGroupText  
                className='bg-info text-light'
              >
                Country
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name='country' 
              placeholder='Input country name...' 
              onChange={ onHandleCountryChange }
            />
          </InputGroup>
          <Button
            className='mt-2 w-50'
            color='primary'
            onClick={ onHandleClick }
            outline
          >
            Search
          </Button>

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
export default DetailPage