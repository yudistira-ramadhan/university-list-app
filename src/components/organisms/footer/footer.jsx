import { Container } from 'reactstrap'

const Footer = () => (
  <Container fluid>
    <div
      data-testid='footer'
      className='footer__copyright'
    >
      All Rights Reserved © { new Date().getFullYear() } by Yudistira Ramadhan
    </div>
  </Container>
)

export default Footer
