import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header/header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import first from "./images/first.jpeg";
import second from "./images/second.jpeg";
import third from "./images/third.jpeg";
import fourth from "./images/fourth.jpeg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import Footer from './MyComponents/footer/footer';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";


function App() {
  var [s, start] = useState("5");

  return (
    <div className="App">
      <Header></Header>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="cont">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" className="flex">
              <Nav.Link href="#home" className="white">Home</Nav.Link>
              <Nav.Link href="#features" className="white">About</Nav.Link>
              <Nav.Link href="#pricing" className="white">Contact Us</Nav.Link>
              <Nav.Link href="#pricing" className="white">Feedback</Nav.Link>
              <Nav.Link href="#pricing" className="white">Achievements</Nav.Link>
              <Nav.Link href="#pricing" className="white">Activities</Nav.Link>
              <Nav.Link href="#pricing" className="green">Admissions 2021</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="ar">
        <div className="grid-1">
          <h1 className="fd">Gallery</h1>

          <Carousel fade className="ad">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={first} width="400px" height="510px"
                alt="First slide"
              />
              <Carousel.Caption className="absolute">
                <h3 className="line-1 anim-typewriter">Welcome to Nirmal Bharati</h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={second} width="400px" height="510px"
                alt="Second slide"
              />

              <Carousel.Caption className="absolute">
                <h3 className="line-1 anim-typewriter">Co-circular Activities</h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={third}
                alt="Third slide"
                width="400px" height="510px"
              />

              <Carousel.Caption className="absolute">

                <h3 className="line-1 anim-typewriter">Sports</h3>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
        <div className="grid-2">
          <h1 className="ed">Principal's Desk</h1>
          <div className="am">
            <Card >
              <Card.Img variant="top" src={fourth} />
              <Card.Body>
                <Card.Title className="gh">Principal ~ Mrs. R.M Shukla(M.A,B.Ed)</Card.Title>
                <Card.Text className="hj">
                  A good student is who shares his knowledge with others too.
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="grid-3">
          <div className="df">
            <Card className="kl"
              bg={'Success'.toLowerCase()}

              text={'Success'.toLowerCase() === 'light' ? 'dark' : 'white'}

              className="mb-2"

            >
              <Card.Header>Notice Board</Card.Header>
              <Card.Body className="oi">
                <marquee width="100%" direction="up" onMouseOver="this.stop()" onMouseOut="this.start()" height="94%" bgcolor="white">
                  <ul className="uu">
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                    <li className="ss">This is a sample scrolling text that has scrolls in the upper direction.</li>
                  </ul>
                </marquee>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />


    </div>
  );
}

export default App;
