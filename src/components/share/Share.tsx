import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Share.scss';
import TextCarousel from '../textCarousel/TextCarousel';
import BtnSignup from '../btnSignup/BtnSignup';
import SendBox from '../sendBox/SendBox';

class Share extends React.Component {
    render() {
        return (
            <div id="main" className="container-fluid">
                    <div className="d-none d-sm-block row __header">
                        <Header />
                    </div>
                
                    <div className="row __body">
                        <div className="d-none d-sm-block col-md-6">

                            <div className="row" style={{width: '100%', height:'100%'}}>
                                <div className="col-md-12 d-flex align-items-center" style={{height:'25%'}}></div>
                                <div className="col-md-12 d-flex align-items-center" style={{height:'25%'}}>
                                    <TextCarousel />
                                </div>
                                <div className="col-md-12 d-flex align-items-center" style={{height:'10%'}}></div>
                                <div className="col-md-12 d-flex" style={{height:'40%'}}>
                                    <BtnSignup />
                                </div>
                            </div>
                        
                        </div>

                        <div className="col-md-6 __send-bg" style={{width: '100%', height:'100%'}}>
                            <SendBox />
                        </div>
                    </div>

                    <div className="d-none d-sm-block row __footer">
                        <Footer />
                    </div>
            </div>
        );
    }
}

export default Share;