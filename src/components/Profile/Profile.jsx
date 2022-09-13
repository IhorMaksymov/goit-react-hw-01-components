import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Description, Avatar, Name, Tag, Location, Stats, Items, Label, Quantity, Thumb } from './Profile.styled';

export const Profile = ({ user }) => {
    return (
        <Box>
            <Description>
                <Thumb>
                    <Avatar src={user.avatar} />
                </Thumb>
                <Name bg='secondary'>{user.username}</Name>
                <Tag >{user.tag}</Tag>
                <Location>{user.location}</Location>
                <Stats>
                    <Items>
                        <Label>Followers</Label>
                        <Quantity>{user.stats.followers}</Quantity>
                    </Items>
                    <Items>
                        <Label>Views</Label>
                        <Quantity>{user.stats.views}</Quantity>
                    </Items>
                    <Items>
                        <Label>Likes</Label>
                        <Quantity>{user.stats.likes}</Quantity>
                    </Items>
                </Stats>
            </Description>
        </Box>
    );
    
        
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
};


