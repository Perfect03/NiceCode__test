import styles from './Checkbox.module.scss';
import { observer } from 'mobx-react-lite';
import usersState from '../../../../store/users';
import React, { useEffect, useState } from 'react';
import { IUser } from '../../../../interfaces&types/interfaces&types';

interface IProps {
  userID: number;
}

const Checkbox = observer(({ userID }: IProps) => {
  const [allChecked, setAllChecked] = useState(usersState.allChecked);
  const [checked, setChecked] = useState(usersState.users.find((el) => el.id == userID)?.selected);
  useEffect(() => {
    setAllChecked(usersState.allChecked);
  }, [usersState.allChecked]);
  useEffect(() => {
    setChecked(usersState.users.find((el) => el.id == userID)?.selected);
  }, [usersState.users.find((el) => el.id == userID)?.selected]);
  return (
    <div className={styles.checkboxWrapper}>
      <label>
        <input
          type="checkbox"
          checked={userID < 0 ? allChecked : checked}
          onClick={(e) => e.stopPropagation()}
          onChange={() => {
            userID < 0 ? usersState.setAllChecked() : usersState.setChecked(userID);
          }}
        />
        <span>{userID < 0 && 'Все'}</span>
      </label>
    </div>
  );
});
export default Checkbox;
