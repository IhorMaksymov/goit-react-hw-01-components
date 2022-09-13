import PropTypes from 'prop-types';
import { FriendListItem, FriendItem, FriendStatus, FriendAvatar, FriendName } from './FreindList.styled';

export const FriendList = ({ friends }) => {
    
    return (
        <FriendListItem>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <FriendItem key={id}>
                    <FriendStatus status={isOnline} />
                    <FriendAvatar src={avatar}/>
                    <FriendName>{name}</FriendName>
                </FriendItem>
            )}
        </FriendListItem>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};