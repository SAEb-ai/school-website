import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header/header';
import Navbar from './MyComponents/Navbar/navbar';
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


function App() {
  var [s, start] = useState("5");

  return (
    <div className="App">
      <Header></Header>
      <Router><Navbar /></Router>
      <div className="ar">
        <h1 className="fd">Gallery</h1>
        <Carousel fade className="ad">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={first} width="400px" height="400px"
              alt="First slide"
            />
            <Carousel.Caption className="absolute">
              <h3 className="line-1 anim-typewriter">Welcome to Nirmal Bharati</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={second} width="400px" height="400px"
              alt="Second slide"
            />

            <Carousel.Caption className="absolute">
              <h3 className="line-1 anim-typewriter">Co-circular Activities</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={third} width="200px" height="400px"
              alt="Third slide"
            />

            <Carousel.Caption className="absolute">

              <h3 className="line-1 anim-typewriter">Sports</h3>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="ed">Principal's Desk</h1>
        <div className="am">
          <Card style={{ width: '32rem', height: '25rem' }}>
            <Card.Img variant="top" src={fourth} style={{ width: '32rem', height: '15rem' }} />
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
      <div className="df">
        <Card className="kl"
          bg={'Success'.toLowerCase()}

          text={'Success'.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '40vw',height:'70vh' }}
          className="mb-2"
        >
          <Card.Header>Notice Board</Card.Header>
          <Card.Body>
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
      <Footer/>

    </div>
  );
}

export default App;
