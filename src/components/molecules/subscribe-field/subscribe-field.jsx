import React, { useState } from 'react'
import { 
  Col, 
  Row, 
  Form, 
  FormGroup, 
  Input, 
  Button 
} from 'reactstrap'

const SubscribeField = () => {
  const [user, setUser] = useState( {
    email: ''
  })
  const onHandleClick = () => {
    const fileData = JSON.stringify(user)
    const blob = new Blob([fileData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = 'users.json'
    link.href = url
    link.click()
  }
  
  const onHandleChange = (e) => {
    setUser({ email: e.target.value }) 
  } 
  return (
    <Form>
      <FormGroup>
        <Row>
          <Col className='pr-0' xs='7' sm='9' md='9'>
            <Input
              type='email'
              placeholder='Enter your email...'
              onChange={ onHandleChange }
            />
          </Col>
          <Col xs='5' sm='3' md='3'>
            <Button
              className='py-1 w-100'
              color='primary'
              onClick={ onHandleClick }
              outline
            >
            SUBSCRIBE
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  )
}
export default SubscribeField