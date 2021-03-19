import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
    placeholder: string;
    icon: string;
}

export const LODropdownWithIcon: React.FC<Props> = ({ icon, placeholder, ...props }) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon"> <i className={icon || 'fa fa-user'}></i> </div>
            </div>            
            <select className="form-control" {...props} aria-label="Input group example" aria-describedby="btnGroupAddon">
                <option selected disabled>{placeholder || 'Placeholder'}</option>
                <option>1</option>
            </select>
        </div>
    )
}
