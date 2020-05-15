import React from "react";
import "./NotFound.scss";
import Header from './../header/Header';
import Footer from './../footer/Footer';

class NotFound extends React.Component {
    render() {
        return (
            <div id="main" className="container-fluid">
                <div className="d-none d-sm-block row __header">
                    <Header />
                </div>

                <div className="__body">
                    <div className="NotFound">
                        <h3>Sorry, page not found!</h3>
                    </div>
                </div>

                <div className="d-none d-sm-block row __footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default NotFound;