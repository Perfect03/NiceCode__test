import React from 'react';
import styles from './UsersList.module.scss';
import UserSearch from './components/UserSearch/UserSearch';
import Users from './components/Users/Users';
import UserOptions from './components/UserOptions/UserOptions';

function UsersList() {
  return (
    <div>
      <UserSearch></UserSearch>
      <UserOptions></UserOptions>
      <Users></Users>
    </div>
  );
}

export default UsersList;
