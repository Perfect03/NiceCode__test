import React from 'react';
import { observer } from 'mobx-react-lite';
import notebookState from '../../store/store';
import usersState from '../../../../store/users';
import styles from './UserNotebook.module.scss';
import etc from '../../../../assets/etc.svg';
import { INotebook, IUser } from '../../../../interfaces&types/interfaces&types';
import Notes from '../Notes/Notes';
import Consultations from '../Consultations/Consultations';
import Videos from '../Videos/Videos';
import Events from '../Events/Events';

const UserNotebook = observer(() => {
  const page = notebookState.page;
  const users = usersState.users;
  const user = users.find((el) => el.id == usersState.active);

  return (
    <div className={styles.notebook}>
      {page == 'заметки' && <Notes user={user as IUser}></Notes>}
      {page == 'консультации' && <Consultations user={user as IUser}></Consultations>}
      {page == 'видео' && <Videos user={user as IUser}></Videos>}
      {page == 'мероприятия' && <Events user={user as IUser}></Events>}
    </div>
  );
});

export default UserNotebook;
