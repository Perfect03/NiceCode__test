import React from 'react';
import { observer } from 'mobx-react-lite';
import noname from '../../../../assets/noname.svg';
import mailIcon from '../../../../assets/telegram.svg';
import warnIcon from '../../../../assets/warn.svg';
import usersState from '../../../../store/users';
import styles from './User.module.scss';
import { IUser } from '../../../../interfaces&types/interfaces&types';
import Checkbox from '../../ui/Checkbox/Checkbox';

interface IProps {
  user: IUser;
  selected: boolean;
}

const User = observer(({ user, selected }: IProps) => {
  // const [checkbox, setCheckbox] = useState(false);
  // useEffect(() => {
  //   console.log(checkbox);

  //   setCheckbox(usersState.select);
  //   console.log(checkbox);
  // }, [usersState.select]);
  return (
    <div className={[styles.user, selected && styles.selected].join(' ')}>
      {usersState.select && <Checkbox userID={user.id}></Checkbox>}
      <img className={styles.avatar} src={user.avatar || noname} alt="avatar" />
      <span className={styles.name}>{user.name || user.email}</span>
      {user.telegram && <img className={styles.infoIcon} src={mailIcon} alt="mail" />}
      {user.warn && <img className={styles.infoIcon} src={warnIcon} alt="warn" />}
    </div>
  );
});

export default User;
