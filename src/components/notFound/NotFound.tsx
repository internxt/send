import React from "react";
import "./NotFound.scss";
import Header from './../header/Header';
import Footer from './../footer/Footer';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Header />
                
                <div className="NotFound">
                    <h3>Sorry, page not found!</h3>
                </div>

                <Footer />
            </div>
        );
    }
}

export default NotFound;