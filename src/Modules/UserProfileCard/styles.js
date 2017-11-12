import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
    blue,
    white,
} from '../../styles/settings/colors';

import {
    oswaldRegular,
    ptSansRegular,
    ptSansBold,
} from '../../styles/tools/types';

import {
    fadeIn,
    fadeInZoomIn,
    fromBottom,
} from '../../styles/tools/animations';

export const UserName = styled.h2`
    ${oswaldRegular('80px')}

    position: absolute;
    color: ${white};
    bottom: -5px;
    right: 30px;

    ${media.desktop`
        ${fromBottom('-100px', '-5px')}
    `}

    ${media.mobile`
        ${oswaldRegular('40px')}
        position: relative;
        margin-top: 20px;
        right: 0;
        bottom: 0;
        text-align: center;
    `}
`

export const ProfilePic = styled.img`
    position: absolute;
    border-radius: 50%;
    width: 220px;
    top: 30px;
    left: 30px;
    border: 10px solid ${white};
    
    ${fadeInZoomIn}

    ${media.mobile`
        position: relative;
        display: block;
        width: 150px;
        height: 150px;
        margin: 20px auto;
        top: 0;
        left: 0;
    `}
`

export const ProfileDetails = styled.div`
    ${ptSansRegular('21px')}    
    max-width: 400px;
    position: absolute;
    color: ${white};
    top: 10px;
    right: 30px;
    line-height: 30px;
    text-align: right;

    b{
        ${ptSansBold('21px')}  
    }

    ${media.mobile`
        position: relative;
        top: 0;
        right: 0;
        text-align: center;
        margin-bottom: 20px;
    `}
`

export const ProfileCardContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    max-width: 960px;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 80px;
    background: ${blue};
    border-radius: 20px;
    overflow: hidden;
    ${fadeIn}

    ${media.mobile`
        margin-top: 60px;
        border-radius: 0;
    `}
`
