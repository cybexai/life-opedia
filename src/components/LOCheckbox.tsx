import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLInputElement> {
    title: string,
    checked: boolean
}

export const LOCheckbox = ({ title, checked, ...props }: Props) => {
    return (
        <label className="remember_me_label">
            <input type="checkbox" className="remember_me_checkbox" checked {...props} />{title}
            <span className="checkmark"></span>
        </label>
    )
}
