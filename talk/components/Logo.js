import React from 'react'
import styled from 'styled-components'
import scilifelablogo from '../static/assets/scilifelab/symbol.svg'

export const LogoStyle = styled.div`
    align-items: center;
    bottom: 16px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 24px;
    width: 95%;
    z-index: 1;

    .scilifelablogo {
        width: 80px;
    }

    .footer {
        font-size: 55%;
        color: #a6a6a6;
    }

`

export function Logo() {
    return (
        <LogoStyle>
            <img className="scilifelablogo" src={scilifelablogo} alt="SciLifeLab Logo" />
            <p className="footer"><strong>Coffee and Code</strong>:&nbsp; Commuter traffic analysis in R</p>
        </LogoStyle>
    );
}

