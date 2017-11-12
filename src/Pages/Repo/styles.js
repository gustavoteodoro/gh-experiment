import styled from 'styled-components';

import {
    white,
    blue,
    grey,
} from '../../styles/settings/colors';

import {
    oswaldRegular,
    ptSansRegular,
    ptSansBold,
} from '../../styles/tools/types';

import {
    fadeIn,
} from '../../styles/tools/animations';

export const RepoContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    max-width: 960px;
    min-height: 300px;
    padding: 10px 30px;
    margin: 0 auto;
    margin-top: 80px;
    background: ${blue};
    border-radius: 20px;
    overflow: hidden;
    color: ${white};
    ${fadeIn}

    h2{
        ${oswaldRegular('70px')}
        margin-bottom: 10px;
    }

    p{
        ${ptSansRegular('24px')};
    }

    ul{
        display: block;
        margin-top: 30px;
    }

    li{
        display: block;
        ${ptSansRegular('24px')};
        margin: 15px 0;
    }

    a{
        color: ${white};
    }
`
