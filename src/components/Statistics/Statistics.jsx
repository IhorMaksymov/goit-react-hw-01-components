import PropTypes from 'prop-types';
import { WrappStat, Title, List, Item, Label, Percentage } from './Statistics.styles';

export const Statistics = ({ title, stats }) => {
    return (
        <WrappStat>
            {title && <Title>{title}</Title>}
            <List>
                {stats.map(({ id, label, percentage }) => 
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                )}
            </List>
        </WrappStat>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
};