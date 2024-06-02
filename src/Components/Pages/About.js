import { Row, Col } from "react-bootstrap"

function About() {
  return (
    <>
      <Row>
        <Col md={"6"} className={"gx-5 mb-4"}>
          <p>
            Lensa RCM adalah <b>Platform Media</b> yang berumah di Pondok
            Pesantren Riyadlul Jannah, Pacet Mojokerto dengan penawaran berbagai
            macam jasa
          </p>
        </Col>
      </Row>
    </>
  )
}

About.title = 'Tentang Kami'

export default About
