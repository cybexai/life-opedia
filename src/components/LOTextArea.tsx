import React, { InputHTMLAttributes } from 'react';
import { COLORS } from '../utilities';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    labelColor?: string;
    bgColor?: string;
    labelTop?: boolean;
}

export const LOTextArea: React.FC<Props> = ({ labelColor, bgColor, placeholder, labelTop, ...props }) => {

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
            {labelTop && <label style={styles.label}>{placeholder}</label>}
            <textarea className="form-control" placeholder={!labelTop ? placeholder : ''} style={styles.input} {...props} />
        </>
    )
}
