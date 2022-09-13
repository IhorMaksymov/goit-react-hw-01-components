import styled from "styled-components";

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${p => p.theme.colors.bgcPrimary};
    width: 300px;
    padding-top: ${p => p.theme.space[5]}px;
`;

export const Thumb = styled.div`
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Avatar = styled.img`
    width: auto;
    height: 150px; 
    background: ${p => p.theme.colors.brColor};
`;

export const Name = styled.p`
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.fontSizes.l};
    margin-bottom: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Location = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Items = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    border: 1px solid ${p => p.theme.colors.brColor};
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.secondary};
    margin-bottom: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
`;

export const Quantity = styled.span`
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.fontSizes.m};
`;
