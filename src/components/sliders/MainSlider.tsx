import React from "react";
import 'styles/mainSlider.css';
import {Carousel} from "react-bootstrap"
import image1 from 'assets/images/img1.jpeg';
import image2 from 'assets/images/img2.jpeg';
import image3 from 'assets/images/img3.jpeg';

const CarouseleContainer = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100" 
            src= {image1}
            alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
                    </Carousel>
    )
} 

export default CarouseleContainer;