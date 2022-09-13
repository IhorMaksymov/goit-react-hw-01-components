import styled from "styled-components";

export const FriendListItem = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100px;
    width: 100%;
    border: 1px solid ${p => p.theme.colors.brColor};
    border-radius: ${p => p.theme.radii.normal};
    padding-top: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
`;

const colorSpan = (p) => {
    switch (p.status) {
        case true:
            return p => p.theme.colors.online;
        default:
            return p => p.theme.colors.ofLine;
    }
};

export const FriendStatus = styled.span`
    display: block;
    background: ${colorSpan};
    width: 15px;
    height: 15px;
    margin-right: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.round};
`;

export const FriendAvatar = styled.img`
    height: 100%;
    margin-right: ${p => p.theme.space[4]}px;   
`;

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
`;
