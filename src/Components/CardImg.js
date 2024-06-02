import { Card } from "react-bootstrap"
import CarouselImg from "./CarouselImg"

function CardImg({ title, src, h, align = "start", children, onLoad }) {
  return (
    <Card className='bg-image hover-overlay shadow-2-strong' onLoad={onLoad}>
      {src ? (
        <div className='bg-image hover-overlay shadow-2-strong'>
          {Array.isArray(src) ? ( // Multiple images
            <CarouselImg
              h={h}
              content={src.map((img) => {
                return { img: <Card.Img variant='top' src={img} /> }
              })}
            />
          ) : (
            // Single image
            <Card.Img variant='top' src={src} />
          )}
          <a href={"#" + title.toLowerCase()} onClick={console.log}>
            <div
              className='mask'
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
      ) : (
        ""
      )}
      <Card.Body>
        <Card.Title className={`d-flex justify-content-${align}`}>
          {title}
        </Card.Title>
        {/* <Card.Text className={`d-flex justify-content-${align}`}> */}
        {children}
        {/* </Card.Text> */}
        {/* <Button variant='primary'></Button> */}
      </Card.Body>
    </Card>
  )
}

export default CardImg
