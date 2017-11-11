import styled from 'styled-components';

import {
    grey,
    blue,
    white,
} from '../../styles/settings/colors';

import {
    oswaldRegular,
    ptSansRegular,
} from '../../styles/settings/types';

export const MainTemplate = styled.div`
    display: block;
`;

export const TemplateHeader = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height:  ${props => props.profile ? '100px' : '100%'};
    background: ${grey};
    transition: height .3s ease;

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
        width: ${props => props.profile ? '200px' : '100%'};
        transition: width .3s ease;
        background: transparent;
        border: 0;
        border-bottom: 1px solid ${white};
        outline: 0;

        &[type='submit']{
            border: 0;
            background: ${blue};
            color: ${white};
        }
    }
`;

export const TemplateHeaderContainer = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`