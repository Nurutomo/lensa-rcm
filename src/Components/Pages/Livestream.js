import { Row, Col } from "react-bootstrap"

function Livestream() {
  return (
    <>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          width='100%'
          height='100%'
          className='embed-responsive-item'
          src='https://www.youtube.com/embed/TZBtZE__v8E'
        ></iframe>
      </div>
    </>
  )
}

export default Livestream
