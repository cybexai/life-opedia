import React, { InputHTMLAttributes } from 'react';
import { COLORS } from '../utilities';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    labelColor?: string;
    bgColor?: string;
}

export const LOTextArea: React.FC<Props> = ({ labelColor, bgColor, placeholder, ...props }) => {

    const styles = {
        label: {
            color: labelColor || COLORS.white
        },
        input: {
            borderRadius: 5,
            background: bgColor || 'transparent',
            borderWidth: 0,
            color: labelColor || COLORS.white
        }
    }

    return (
        <>
            <label style={styles.label}>{placeholder}</label>
            <textarea className="form-control" style={styles.input} {...props} />
        </>
    )
}
