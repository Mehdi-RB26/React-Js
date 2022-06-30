import React from 'react'
import { Carousel, } from 'react-bootstrap'


const Crossfade = () => {

  return (
      <>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="caro1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>You will find your dream car in simple clicks</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="caro2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Classic lover or sport lover ?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="caro3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Prove em wrong and get your car NOW !</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>)
}

export default Crossfade