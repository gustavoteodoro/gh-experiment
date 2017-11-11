import styled from 'styled-components';

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
`;



export const TemplateHeaderContainer = styled.div`
    display: block;
    position: ${props => props.profile ? 'relative' : 'absolute'};
    width: ${props => props.profile ? '960px' : '420px'};
    top: ${props => props.profile ? '15px' : '50%'};
    left: ${props => props.profile ? '0' : '50%'};
    transform: ${props => props.profile ? 'none' : 'translate(-50%,-50%);'};
    transition: width .3s ease;
    overflow: hidden;
`

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
        width: 100%;
        transition: opacity .3s ease;
        background: transparent;
        border: 0;
        border-bottom: 1px solid ${white};
        outline: 0;
        opacity: ${props => props.profile ? '0' : '1'};

        &[type='submit']{
            border: 0;
            background: ${blue};
            color: ${white};
        }
    }
`;