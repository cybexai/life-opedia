import React, { CSSProperties, FunctionComponent } from 'react';
import { COLORS } from '../utilities';

type Props = {
   
}

export const LOLogo = () =>
    <h3 style={styles.logo}>LifeOpedia!</h3>


const styles: {[key: string]: CSSProperties} = {
    logo: {
        color: COLORS.primary
    }
}    