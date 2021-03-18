import React, { CSSProperties, FunctionComponent } from 'react';

type Props = {
    placeholder?: string;
    type: string;
}

export const LOTextInput = ({ placeholder, type, ...props }: Props) => {
    return (
        <>
            <label>{placeholder}</label>
            <input className="form-control" style={styles.input} type={type} {...props} />
        </>
    )
}

const styles: {[key: string]: CSSProperties} = {
    input: {
        borderRadius: 20,
        backgroundColor: 'transparent'
    }
}    