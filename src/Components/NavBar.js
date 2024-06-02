import { useEffect, useState } from "react"
import { Container, Navbar } from "react-bootstrap"
import { ReactComponent as Logo } from "./Lensa RCM.svg"
import DigitalClock from './Clock'

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const isScrolled = scrollTop > 0
    setScrolled(isScrolled)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navbar
      className={"fixed-navbar rounded-bottom-2" + (scrolled ? " scrolled" : "")}
      variant='dark'
      fixed='top'
    >
      <Container fluid>
        <Navbar.Brand href='#'>
          <Logo
            className="white"
            height='2rem'
            width='100%'
          />
        </Navbar.Brand>
        {/* <li class='nav-item align-items-center d-flex'>
          <i class='fas fa-sun'></i>
          <div class='ms-2 form-check form-switch'>
            <input
              class='form-check-input'
              type='checkbox'
              role='switch'
              id='themingSwitcher'
            />
          </div>
          <i class='fas fa-moon'></i>
        </li> */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <DigitalClock/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
