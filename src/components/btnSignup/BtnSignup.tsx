import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import signUpIcon from './../../assets/img/signup-icon.svg';
import './BtnSignup.scss';


class BtnSignup extends React.Component {
    render() {
        return (
            <div>
                <OverlayTrigger
                    trigger='hover'
                    key='bottom'
                    placement='bottom'
                    overlay={
                    <Popover id={'popover-positioned-bottom'} className="__dialog">
                        <Popover.Content className="__dialog-text">
                            Share files up to 7 GB, set password protection, enable email notifications, limit link openings, delete links, and see how many times your link was opened.
                        </Popover.Content>
                    </Popover>
                    }
                >
                    <Button variant="light" className="__signup"><img className="__body-signup-avatar" src={signUpIcon}></img><span className="__signup-text">  Sign up for more features</span></Button>
                </OverlayTrigger>{' '}
            </div>
        );
    }
}

export default BtnSignup;