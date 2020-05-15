import React from 'react';
import './TextCarousel.scss';

class TextCarousel extends React.Component {
    render() {
        return (
            <div className="__carousel">
                <span className="__carousel-text">Share files for free in</span><br/>
                <span className="__carousel-text">seconds with complete</span><br/>
                <span className="__carousel-blue-text">privacy and security.</span>
            </div>
        );
    }
}

export default TextCarousel;