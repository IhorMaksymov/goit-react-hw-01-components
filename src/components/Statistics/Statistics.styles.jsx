import styled from "styled-components";
import { getRandomHexColor } from '../../utils/randomColor';

export const WrappStat = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${p => p.theme.colors.bgcPrimary};
    width: 300px;
    padding-top: ${p => p.theme.space[4]}px;
    
`;

export const Title = styled.h2`
    color: ${p => p.theme.colors.secondary};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Item = styled.li`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    background: ${getRandomHexColor};

`;

export const Label = styled.span`
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.brColor};
`;

export const Percentage = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.brColor};
`;