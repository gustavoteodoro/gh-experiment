import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
    blue,
    white,
    lightGrey,
    grey,
} from '../../styles/settings/colors';

import {
    ptSansRegular,
    ptSansBold,
} from '../../styles/tools/types';

import {
    fadeIn,
} from '../../styles/tools/animations';

export const OrderTitle = styled.h4`
    display: block;
    
    ${ptSansBold('20px')}

    color: ${grey};


    ${media.mobile`
        margin: 0 20px;
    `}
`

export const RepoList = styled.div`
    display: block;
    margin: 10px -1%;
    a{
        text-decoration: none;
        color: ${grey};
    }

    ${media.mobile`
        margin: 10px 0;
    `}
`

export const RepoContainer = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 48%;
    border: 1px solid ${lightGrey};
    padding: 20px;
    margin: 10px 1%;
    background: ${white};
    transition: background .3s ease;

    h5{
        ${ptSansBold('20px')}
        color: ${blue};
        margin-bottom: 10px;
        transition: color .3s ease;
    }
    p{
        color: ${grey};
        ${ptSansRegular('14px')}
        transition: color .3s ease;

        b{
            ${ptSansBold('14px')}
        }
    }

    &:hover{
        background: ${blue};
        h5{
            color: ${white};
        }
        p{
            color: ${white};
        }
    }


    ${media.mobile`
        width: calc(100% - 40px);
        margin: 10px 20px;
    `}
`

export const ProfileReposContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    ${fadeIn}
`
