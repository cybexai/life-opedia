import React, { ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor: string,
    title: string,
    icon?: string,
    borderRadius?: number,
    showIcon?: boolean    
}

export const LOLargeButton = ({ backgroundColor, title, icon, borderRadius, showIcon, ...props }: Props) => {
    return (
        <button {...props} style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }} className="btn btn-social">
            { showIcon && <i className={icon || 'fa fa-user'}></i> } {title}</button>
    )
}
