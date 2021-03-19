import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    icon: string;
}

export const LOTextInputWithIcon: React.FC<Props> = ({ icon, placeholder, ...props }) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon"> <i className={icon || 'fa fa-user'}></i> </div>
            </div>
            <input type="text" className="form-control" {...props} placeholder={placeholder || 'Placeholder'} aria-label="Input group example" aria-describedby="btnGroupAddon" />
        </div>
    )
}
