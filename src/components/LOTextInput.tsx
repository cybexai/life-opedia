import React, { CSSProperties, InputHTMLAttributes } from 'react';
import { COLORS } from '../utilities';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export const LOTextInput: React.FC<Props> = ({ placeholder, ...props }) => {
    return (
        <>
            <label style={styles.label}>{placeholder}</label>
            <input className="form-control" style={styles.input} {...props} />
        </>
    )
}

const styles: { [key: string]: CSSProperties } = {
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