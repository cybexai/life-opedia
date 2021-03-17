import React, { CSSProperties, FunctionComponent } from 'react';
import { COLORS } from '../utilities';
import { LOLogo } from './LOLogo';

type Props = {
    placeholder?: string;
    type?: string;
}

export const LONavBar = ({ placeholder, type, ...props }: Props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <LOLogo />

            <div>
            <a> HOME </a>
            <a> AWS </a>
            <a> TRAVEL </a>
            <a> DESIGN </a>
            <a> STYLE </a>
            <a> FOOD </a>
            </div>

            <div>
                <a> LOGIN </a>
                |
                <a> REGISTER </a>
                <button className="btn btn-primary btn-sm" style={{backgroundColor:COLORS.primary, borderColor:COLORS.primary}}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </nav>
    )
}

const styles: { [key: string]: CSSProperties } = {
    left: {
        backgroundColor: 'blue'
    }
}