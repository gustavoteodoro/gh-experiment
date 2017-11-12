import styled from 'styled-components';

import {
    blue,
    grey,
} from '../../styles/settings/colors';

import {
    ptSansRegular,
    ptSansBold,
} from '../../styles/tools/types';

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

export const UserReposHeader = styled.div`
    display: block;
    max-width: 960px;
    margin: 20px auto;

    h3{
        ${ptSansBold('30px')}
    }
`