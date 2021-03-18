import React from 'react';

import { LOLogo } from './LOLogo';

interface Props {

}

export const LOFooter: React.FC<Props> = ({ ...props }) => {
    return (
        <footer className="footer">
            <LOLogo />

            <div className="footer-center">
                <a href="#">Privacy Policy Terms &amp; Conditions</a>
                <a href="#">Copyright &copy; 2020. All rights reserved.</a>
            </div>

            <div className="footer-right">
                <p>Connect with us</p>
                <a href="#"><i className={'fab fa-facebook'}></i> </a>
                <a href="#"><i className={'fab fa-twitter'}></i> </a>
                <a href="#"><i className={'fab fa-instagram'}></i> </a>
            </div>
        </footer>
    )
}
