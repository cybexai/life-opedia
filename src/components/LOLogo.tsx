import React, { CSSProperties, HTMLAttributes } from 'react';
import { COLORS } from '../utilities';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
   
}

export const LOLogo = ({...props}: Props) =>
    <h3 style={styles.logo} {...props}>LifeOpedia!</h3>


const styles: {[key: string]: CSSProperties} = {
    logo: {
        color: COLORS.primary
    }
}    