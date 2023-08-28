import React, { useState } from 'react';
import styles from './Events.module.scss';
import { IUser } from '../../../../interfaces&types/interfaces&types';
import Event from '../Event/Event';

interface IProps {
  user: IUser;
}

function Events({ user }: IProps) {
  return (
    <div className={styles.events}>
      {user.events.map((el) => (
        <Event event={el} key={el.date.getMilliseconds()}></Event>
      ))}
    </div>
  );
}

export default Events;
