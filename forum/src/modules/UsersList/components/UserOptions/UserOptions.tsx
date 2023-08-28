import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import usersState from '../../../../store/users';
import styles from './UserOptions.module.scss';
import Checkbox from '../../ui/Checkbox/Checkbox';

const UserOptions = observer(() => {
  return (
    <div className={styles.options}>
      <div className={styles.left}>
        {usersState.select && <Checkbox userID={-1}></Checkbox>}
        <div className={`${styles.count} ${usersState.select ? styles.active : ''}`}>
          {usersState.select
            ? usersState.users.filter((el) => el.selected).length
            : usersState.count}
        </div>
      </div>
      <div className={styles.right}>
        {usersState.select ? (
          <>
            <span className={styles.do}>Действия</span>
            <span className={styles.do} onClick={() => usersState.setSelect()}>
              Отменить
            </span>
          </>
        ) : (
          <span className={styles.do} onClick={() => usersState.setSelect()}>
            Выбрать
          </span>
        )}
      </div>
    </div>
  );
});

export default UserOptions;
