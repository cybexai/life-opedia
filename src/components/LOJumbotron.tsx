import React, { HTMLAttributes } from 'react';
import * as CSS from 'csstype';
interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText?: string,
    footerText?: string,    
    footerTextColor?: string,    
}

export const LOJumbotron: React.FC<Props> = ({ headerText, footerText, footerTextColor, ...props }) => {

    const style: CSS.Properties = {
        color: 'white'
      };

    return (
        <div className="jumbotron" {...props}>
            <div className="card-title-transparent">
                <h5>{headerText || 'Header Text'}</h5>
                <hr />
            </div>

            <div className="card-footer-transparent">
                <h5 style={{color: footerTextColor || 'white'}}>{footerText || 'Footer Text'}</h5>
            </div>
        </div>
    )
}