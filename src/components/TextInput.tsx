import React, { FunctionComponent } from 'react';

type Props = {
    placeholder: string;
    type: string;
}

export const TextInput = ({ placeholder, type, ...props } : Props) =>
    <input className="form-control" type={type} placeholder={placeholder} {...props} />