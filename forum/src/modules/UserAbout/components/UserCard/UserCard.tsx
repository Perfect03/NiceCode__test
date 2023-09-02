import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import usersState from '../../../../store/users';
import styles from './UserCard.module.scss';
import noname from '../../../../assets/noname.svg';
import Dropdown from '../../ui/Dropdown/Dropdown';

const UserCard = observer(() => {
  const [more, setMore] = useState(false);
  const users = usersState.users;
  const user = users.find((el) => el.id == usersState.active);

  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={user?.avatar || noname} alt="avatar" />
      <div className={styles.about}>
        <span>{user?.name || user?.email}</span>
        <span className={styles.ageSex}>
          {user?.age} лет, {user?.sex}
        </span>
      </div>
      <Dropdown></Dropdown>
    </div>
  );
});

export default UserCard;
