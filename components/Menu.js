import Image from 'next/image'

import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from '../styles/Menu.module.scss'

import isologo from '../public/logo-1.svg'
import isotipo from '../public/isotipo.svg'

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image
            width={100}
            height={30}
            src={isotipo}
            alt="Isotipo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <Nav.Link href="#link">Planos</Nav.Link>
            <Nav.Link href="#link">Fale conosco</Nav.Link>
            <div className="d-flex align-items-center ms-lg-5">
              <Button variant="dark" className="pe-5 ps-5">Entrar</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
