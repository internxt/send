import React from 'react';
import './TextCarousel.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {}
interface State {}

class TextCarousel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
/*             <div className="row" style={{width: '100%'}}>
                <div className="col-md-10"> */
                    <CarouselProvider className="__carousel-c"
                            naturalSlideWidth={30}
                            naturalSlideHeight={30}
                            orientation="vertical"
                            totalSlides={2}
                            interval={10000}
                            isPlaying
                            infinite={true}
                            playDirection="forward"
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
                        </Slider>

                        {/* <ButtonBack className="__slide-button invisible">s</ButtonBack>
                        <ButtonNext className="__slide-button-2 invisible">s</ButtonNext> */}
                        
                    </CarouselProvider>
/*                 </div>

                <div className="col-md-2" style={{padding: 0}}>
                    <div className="__control-btn-group float-left">
                            <div className="buttonBack___1mlaL carousel__back-button __slide-button"></div>
                            <div className="buttonNext___2mOCa carousel__next-button __slide-button-2"></div>
                        </div>
                </div>
            </div> */
        );
    }
}

export default TextCarousel;