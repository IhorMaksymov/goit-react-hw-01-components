import { Box } from "./Box/Box";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./Transaction/Transaction";
import userProfile from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json';
import  transactions  from '../data/transactions.json';


export const App = () => {
  return (
    <Box
      pt={5}
      pb={5}
      display='flex'
       alignItems='center'
      flexDirection='column'
      as='main'
    >
      <Profile user={userProfile} />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
}
