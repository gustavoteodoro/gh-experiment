import styled, { css } from 'styled-components';

export const MainTemplate = styled.div`
    display: block;
`;

export const TemplateHeader = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height:  ${props => props.profile ? '100px' : '100%'};;
    background: white;
    transition: height .3s ease;

    input{
        width: ${props => props.profile ? '200px' : '100%'};
        transition: width .3s ease;
    }
`;
