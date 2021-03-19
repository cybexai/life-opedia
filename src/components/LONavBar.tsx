import React, { CSSProperties, FunctionComponent } from 'react';
import { COLORS } from '../utilities';
import { LOLogo } from './LOLogo';

type Props = {
    placeholder?: string;
    type?: string;
}

export const LONavBar = ({ placeholder, type, ...props }: Props) => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm">
        {/* <a className="navbar-brand d-lg-none font-weight-bold" href="#">LifeOpedia!</a> */}
        <LOLogo className="d-lg-none" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
            {/* <a className="navbar-brand d-lg-block d-none font-weight-bold" href="#">LifeOpedia!</a> */}
            <LOLogo className="d-lg-block d-none" />
            <ul className="navbar-nav mt-2 mt-lg-0 text-uppercase">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Aws</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Travel</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Design</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Style</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Food</a>
                </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0 text-uppercase">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Login</a>
                </li>
                <span className="d-none d-lg-inline-block my-auto ">|</span>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Register</a>
                </li>
                <button className="btn btn-sm bg-primary-color text-white my-auto" type="button"> <i className="fa fa-search"></i> </button>
            </ul>
        </div>
    </nav>
      
    )
}
