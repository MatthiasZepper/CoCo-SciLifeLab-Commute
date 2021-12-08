import React from 'react';
import scilifelablogo from '../static/assets/scilifelab/symbol.svg';
import { LogoStyle } from './Logo';


export function LogoNeu() {
    return (
        <LogoStyle>
            <img className="scilifelablogo" src={scilifelablogo} alt="SciLifeLab Logo" />
            <p className="footer"><strong>Coffee and Code</strong>:&nbsp; I want to ride my bicycle (to the SciLifeLab)</p>
        </LogoStyle>
    );
}
