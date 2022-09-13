
import styled from "styled-components";

export const Transaction = styled.table`
    width: 50%;
    font-size: ${p => p.theme.fontSizes.s};
    border: 1px solid ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.normal};
    border-collapse: collapse;
`;

export const HeaderTransaction = styled.thead`
    
`;

export const HeaderItem = styled.th`
    background: ${p => p.theme.colors.thBg};
    width: 140px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    border-right: 1px solid ${p => p.theme.colors.bgcPrimary};
    &:last-child {
        border-right: none;
    }
`;

export const List = styled.tr`
    background: ${p => p.theme.colors.brColor};
    &:nth-child(2n) {
        background: none;
    }
`;

export const Item = styled.th`
    border-right: 1px solid ${p => p.theme.colors.secondary};
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    text-transform: capitalize;
    &:last-child {
        border-right: none;
    }
`;