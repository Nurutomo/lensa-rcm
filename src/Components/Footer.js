import { Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <>
      <Row>
        <Col className='d-flex justify-content-center align-items-center'>
          <h1>Connect with us</h1>
        </Col>
        <Col className='align-items-center'>
          <h2>Main Office</h2>
          <p>
            Pondok Pesantren
            <br />
            Riyadlul Jannah,
            <br />
            Pacet Mojokerto.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center align-items-center'>
          <p>Momenmu berseri abadi</p>
        </Col>
      </Row>
    </>
  )
}

export default Footer
