import styled, { css } from 'styled-components';

import {
    grey,
    blue,
    white,
} from '../../styles/settings/colors';

import {
    oswaldRegular,
    ptSansRegular,
} from '../../styles/tools/types';

export const MainTemplate = styled.div`
    display: block;
    overflow: auto;
`;

export const TemplateHeaderContainer = styled.div`
    display: block;
    position: absolute;
    max-width: 420px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: width .3s ease;
    overflow: hidden;
    margin: 0 auto;
`

export const TemplateHeader = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100%;
    background: ${grey};
    transition: height .3s ease;

    a{
        color: ${white};
        text-decoration: none;
    }

    h1{
        ${oswaldRegular('60px')}

        color: ${white};
        text-align: center;
    }

    input{
        ${ptSansRegular('22px')}

        box-sizing: border-box;
        padding: 10px;
        margin: 10px 0;
        text-align: center;
        color: ${white};
        width: 100%;
        transition: opacity .3s ease, visibility 0s .3s ease;
        background: transparent;
        border: 0;
        border-bottom: 1px solid ${white};
        outline: 0;
        opacity: 1;
        visiblity: visible;

        &[type='submit']{
            border: 0;
            background: ${blue};
            color: ${white};
        }
    }

    ${props => props.profile && css`
        height: 60px;

        h1{
            ${oswaldRegular('30px')}
        }

        input{
            opacity: 0;
            visibility: hidden;
            display: none;
        }

        ${TemplateHeaderContainer}{
            position: relative;
            max-width: 960px;
            top: 15px;
            left: 0;
            transform: none;
        }
    `}
`;