import { isValidElement } from "react"
import { Carousel } from "react-bootstrap"
let i = 0

function CarouselImg({ content, fade, h, className }) {
  return (
    <Carousel
      fade={fade}
      className={className}
      style={{ height: /([0-9]+)?(\.[0-9])?[^0-9]+/.test(h) ? h : "" }}
    >
      {content.map(({ img, title, content }) => {
        let style = {}
        const isValid = isValidElement(img)
        if (!isValid) style.backgroundImage = `url(${img})`
        else if (/([0-9]+)?(\.[0-9])?[^0-9]+/.test(h)) style.height = h
        return (
          <Carousel.Item key={"carousel" + i++} style={style}>
            {isValid ? (
              img
            ) : title || content ? (
              <div className={"mask"}>
                <div
                  className={
                    "d-flex justify-content-center align-items-center h-100"
                  }
                >
                  <div className='text-white text-center'>
                    <h2>{title}</h2>
                    {content}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default CarouselImg
