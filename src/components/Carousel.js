import React from 'react';
import image_1 from '../images/guitar_backdrop_1.jpg';
import image_2 from '../images/guitar_backdrop_2.jpg';
import image_3 from '../images/guitar_backdrop_3.jpg';

export default function Carousel() {
    return (
        <React.Fragment>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" style={{ height: '700px' }}>
                    <div className="carousel-item active" style={ imageContainer }>
                        <img className="d-block w-100" src={ image_1 } style={ imageStructure } alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ image_2 } style={ imageStructure } alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ image_3 } style={ imageStructure } alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{ height: '40px', width: '40px' }} aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" style={{ height: '40px', width: '40px' }} aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    )
}

const imageStructure = {
    display: 'block',
    objectFit: 'cover',
    height: '700px',
    width: 'auto'
}
const imageContainer = {
    display: 'block',
    position: 'relative',
    overflow: 'auto'
}