import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,  
}

export const LOButton = ({ title, ...props }: Props) => {
    return (
        <button {...props} className="btn btn-primary2">{title}</button>
    )
}
