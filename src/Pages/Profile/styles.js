import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
    blue,
    grey,
    red,
} from '../../styles/settings/colors';

import {
    ptSansRegular,
    ptSansBold,
} from '../../styles/tools/types';

import {
    fadeInDelay,
} from '../../styles/tools/animations';

export const UserReposMenu = styled.ul`
    display: block;
    ${ptSansRegular('16px')}
    margin: 10px 0;

    li{
        display: inline-block;
        
        &::after{
            content: '|';
            display: inline-block;
            margin: 0 5px;
        }
        &:last-child{
            &::after{
                content:'';
                display: none;
            }
        }
    }
    a{
        color: ${grey};
        text-decoration: none;

        &.active{
            color: ${blue};
        }
    }
`

export const UserNotFound = styled.div`
    display: block;
    margin-top: 60px;
    ${ptSansBold('40px')};
    color: ${red};
    padding: 20px;
    text-align: center;
    ${fadeInDelay}
    
    a{
        margin-top: 20px;
        ${ptSansBold('20px')};
        display: block;
        color: ${blue};
    }
`

export const UserReposHeader = styled.div`
    display: block;
    max-width: 960px;
    margin: 20px auto;

    h3{
        ${ptSansBold('30px')}
    }
    ${media.mobile`
        padding: 0 20px;
    `}
`