import { Container } from "react-bootstrap"
import "./App.css"
import NavBar from "./Components/NavBar"
import CarouselImg from "./Components/CarouselImg"
import Pages from "./Components/Pages"
import Footer from "./Components/Footer"

const CarouselContent = [
  {
    img: "https://picsum.photos/1920/1080",
    title: "First Slide",
  },
  {
    img: "https://picsum.photos/1600/900",
    title: "Second Slide",
  },
  {
    img: "https://picsum.photos/1280/720",
    title: "Third Slide",
  },
  ...new Array(5).fill().map(() => {
    let i = 200 + ~~(Math.random() * 500)
    return {
      img: "https://picsum.photos/" + i,
      title: i,
    }
  }),
]

function App() {
  return (
    <div id='App'>
      <NavBar />
      <CarouselImg fade className='full-page' content={CarouselContent} />
      <Container bg='dark' className={"mt-5"}>
        {[
          "Services",
          "About",
          "Photography",
          "Videography",
          "Livestream",
          "Info",
          "Reason",
        ].map((type) => (
          <Pages key={type} type={type} />
        ))}
      </Container>
      <Footer />
    </div>
  )
}

export default App
