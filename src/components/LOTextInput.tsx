import React, { InputHTMLAttributes } from 'react';
import { COLORS } from '../utilities';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    labelColor?: string;
    bgColor?: string;
}

export const LOTextInput: React.FC<Props> = ({ labelColor, bgColor, placeholder, ...props }) => {

    const styles = {
        label: {
            color: labelColor || COLORS.white
        },
        input: {
            borderRadius: 20,
            background: bgColor || 'rgba(194,194,194,0.2)',
            borderWidth: 0,
            color: labelColor || COLORS.white
        }
    }

    return (
        <>
            <label style={styles.label}>{placeholder}</label>
            <input className="form-control" style={styles.input} {...props} />
        </>
    )
}
