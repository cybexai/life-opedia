import React, { CSSProperties, FunctionComponent } from 'react';
import { COLORS } from '../utilities';

type Props = {
    backgroundColor: string,
    title: string,
    icon?: string,
    borderRadius?: number,
    showIcon?: boolean
}

export const LOLargeButton = ({ backgroundColor, title, icon, borderRadius, showIcon, ...props }: Props) => {
    return (
        <button style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }} className="btn btn-social">
            { showIcon && <i className={icon || 'fa fa-user'}></i> } {title}</button>
    )
}
