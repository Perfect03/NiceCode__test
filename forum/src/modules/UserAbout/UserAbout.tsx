import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './UserAbout.module.scss';
import UserCard from './components/UserCard/UserCard';
import Menu from './components/Menu/Menu';
import UserNoteBook from './components/UserNotebook/UserNotebook';
import { IUser } from '../../interfaces&types/interfaces&types';

const UserAbout = () => {
  return (
    <div className={styles.userAbout}>
      <UserCard></UserCard>
      <Menu></Menu>
      <UserNoteBook></UserNoteBook>
    </div>
  );
};

export default UserAbout;
