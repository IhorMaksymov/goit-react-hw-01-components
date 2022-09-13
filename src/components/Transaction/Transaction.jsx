import PropTypes from 'prop-types';
import {Transaction, HeaderTransaction, HeaderItem, List, Item} from './Transactuon.styled'

export const TransactionHistory = ({items}) => {
    return (
        <Transaction>
            <HeaderTransaction>
                <tr>
                    <HeaderItem>Type</HeaderItem>
                    <HeaderItem>Amount</HeaderItem>
                    <HeaderItem>Currency</HeaderItem>
                </tr>
            </HeaderTransaction>    
            <tbody>
                {items.map(({ id, type, amount, currency }) => 
                    <List key={id}>
                        <Item>{type}</Item>
                        <Item>{amount}</Item>
                        <Item>{currency}</Item>
                    </List>
                )}
            </tbody>
        </Transaction>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
};