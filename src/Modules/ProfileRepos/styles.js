import styled from 'styled-components';

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
} from '../../styles/tools/animations';

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
