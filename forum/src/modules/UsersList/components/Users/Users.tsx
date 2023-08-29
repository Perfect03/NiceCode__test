import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Users.module.scss';
import usersState from '../../../../store/users';
import User from '../User/User';

const Users = observer(() => {
  const users = usersState.users;
  return (
    <div className={styles.users}>
      {users
        .filter((elem) => elem.name?.includes(usersState.filter))
        .map((el) => (
          <div
            onClick={(e) => {
              usersState.setActive(el.id);
            }}
            key={el.id}
          >
            <User user={el} selected={el.id == usersState.active}></User>
          </div>
        ))}
    </div>
  );
});

export default Users;
