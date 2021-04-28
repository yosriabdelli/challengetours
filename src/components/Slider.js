import React, { Component } from "react";

import {Carousel} from 'react-bootstrap';

export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/a1/40/fb/a140fb48914b507998e2ccce6f8d36fd.jpg"
                    alt="maldive"
                    />
                    <Carousel.Caption>
                    <h3>Maldive</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://voyage-onirique.com/wp-content/uploads/2020/02/backiee-132756-chute-Islande-landscape.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Iceland</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.chezhung.com/cache/images/diaporama/images-du-vietnam-chez-hung-02-14.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Vitnam</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )}
}
