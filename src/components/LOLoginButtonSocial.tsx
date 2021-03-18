import React, { CSSProperties, FunctionComponent } from 'react';
import { COLORS } from '../utilities';

type Props = {
    backgroundColor: string,
    title: string,
    icon?: string,
    borderRadius?: number
}

export const LOLoginButtonSocial = ({ backgroundColor, title, icon, borderRadius, ...props }: Props) => {
    return (
        <button style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }} className="btn btn-social"><i className="fa fa-user"></i>{title}</button>
    )
}
