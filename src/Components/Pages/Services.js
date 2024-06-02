import { Row, Col } from "react-bootstrap"
import CardImg from "../CardImg"

function Services() {
  return (
    <>
      <Row className='mb-5'>
        <Col>
          <CardImg title='Sewa Alat' onLoad={console.log} h='300px' src={['https://picsum.photos/300/150','https://picsum.photos/300/160']}>
            <ol>
                <li>Kamera</li>
                <li>Tripod</li>
                <li>Kabel HDMI</li>
            </ol>
          </CardImg>
        </Col>
        <Col>
          <CardImg title='Jasa' src='https://picsum.photos/300/150?random=1'>
            <ol>
              <li>Editing Foto</li>
              <li>Editing Video</li>
              <li>Desain Undangan</li>
              <li>Take Video</li>
              <li>Livestreaming</li>
            </ol>
          </CardImg>
        </Col>
        <Col>
          <CardImg title='Sewa Alat dan Jasa' src='https://picsum.photos/300/150?random=2'>
            <ol>
                <li>Dokumentasi Pernikahan</li>
                <li>Dokumentasi Wisuda</li>
                <li>Dokumentasi Perpisahan</li>
                <li>Dokumentasi Sunatan</li>
            </ol>
          </CardImg>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <CardImg title='Photography' src='https://picsum.photos/300'/>
        </Col>
        <Col>
          <CardImg title='Videography' src='https://picsum.photos/300?random=1'/>
        </Col>
        <Col>
          <CardImg title='Livestream' src='https://picsum.photos/300?random=2'/>
        </Col>
      </Row>
    </>
  )
}

export default Services
