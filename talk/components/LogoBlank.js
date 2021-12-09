import React from 'react';
import scilifelablogo from '../static/scilifelab/symbol.svg';
import { LogoStyle } from './Logo';


export function LogoBlank() {
    return (
        <LogoStyle>
            <img className="scilifelablogo" src={scilifelablogo} alt="SciLifeLab Logo" />
        </LogoStyle>
    );
}
