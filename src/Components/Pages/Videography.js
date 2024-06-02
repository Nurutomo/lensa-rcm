import { Row, Col } from "react-bootstrap"
import CardImg from "../CardImg"

function Videography() {
  return (
    <>
      <Row className='mb-5'>
        <Col>
          <CardImg title='Sewa Alat' src='https://picsum.photos/300'>
            <ol>
                <li>A</li>
                <li>B</li>
            </ol>
          </CardImg>
        </Col>
        <Col>
          <CardImg title='Jasa' src='https://picsum.photos/300?random=1'>
            <ol>
                <li>A</li>
                <li>B</li>
            </ol>
          </CardImg>
        </Col>
      </Row>
    </>
  )
}

export default Videography
