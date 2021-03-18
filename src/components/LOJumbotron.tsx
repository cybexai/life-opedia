import React, { CSSProperties, HTMLAttributes } from 'react';
import { COLORS } from '../utilities';

interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText?: string,
    footerText?: string
}

export const LOJumbotron: React.FC<Props> = ({ headerText, footerText, ...props }) => {
    return (
        <div className="jumbotron" {...props}>
            <div className="card-title-transparent">
                <h5>{headerText || 'Header Text'}</h5>
                <hr />
            </div>

            <div className="card-footer-transparent">
                <h5>{footerText || 'Footer Text'}</h5>
            </div>
        </div>
    )
}

const styles: { [key: string]: CSSProperties } = {
    label: {
        color: COLORS.white
    },
    input: {
        borderRadius: 20,
        background: 'rgba(194,194,194,0.2)',
        borderWidth: 0,
        color: COLORS.white
    }
}