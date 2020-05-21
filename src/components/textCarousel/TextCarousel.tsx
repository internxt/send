import React from 'react';
import './TextCarousel.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class TextCarousel extends React.Component {
    render() {
        return (
            <CarouselProvider className="__carousel-c"
                naturalSlideWidth={30}
                naturalSlideHeight={30}
                orientation="vertical"
                totalSlides={3}
                interval={3000}
                isPlaying
            >
                <Slider>
                    <Slide className="__slide" index={0}>
                        <span className="__carousel-text">Share files for free in</span><br/>
                        <span className="__carousel-text">seconds with complete</span><br/>
                        <span className="__carousel-blue-text">privacy and security.</span>
                    </Slide>
                    <Slide className="__slide" index={1}>
                        <span className="__carousel-text">Share files for free in</span><br/>
                        <span className="__carousel-text">seconds with complete</span><br/>
                        <span className="__carousel-blue-text">privacy and security.</span>
                    </Slide>
                    <Slide className="__slide" index={2}>
                        <span className="__carousel-text">Share files for free in</span><br/>
                        <span className="__carousel-text">seconds with complete</span><br/>
                        <span className="__carousel-blue-text">privacy and security.</span>
                    </Slide>
                </Slider>

                
            </CarouselProvider>
        );
    }
}

export default TextCarousel;