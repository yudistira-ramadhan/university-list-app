import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import { SubscribeField } from 'components/molecules'

const Homepage = () => (
  <Container data-testid='homepage'>
    <Jumbotron className='mt-5'>
      <h2 className='text-center'>
        Welcome to the University List App
      </h2>
      <hr className='my-4' />
      <p className='lead text-center'>
        This app can help anyone to search the information about the University around the World.
      </p>
      <p className='text-center mt-5'>
        To get updated about the University information around the World, please subscribe to our newsletter.
      </p>
      <div>
        <SubscribeField />
      </div>
    </Jumbotron>
  </Container>

)

export default Homepage