import React, { CSSProperties, FunctionComponent } from 'react';
import { COLORS } from '../utilities';

type Props = {
    placeholder?: string;
    type: string;
}

export const LOTextInput = ({ placeholder, type, ...props }: Props) => {
    return (
        <>
            <label style={styles.label}>{placeholder}</label>
            <input className="form-control" style={styles.input} type={type} {...props} />
        </>
    )
}

const styles: {[key: string]: CSSProperties} = {
    label: {
        color: COLORS.white
    },
    input: {
        borderRadius: 20,
        background: 'rgba(194,194,194,0.2)',
        borderWidth: 0,
        color: COLORS.white
    }
}    