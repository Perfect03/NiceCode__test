import React, { useState } from 'react';
import styles from './Consultations.module.scss';
import { IUser } from '../../../../interfaces&types/interfaces&types';
import Consultation from '../Consultation/Consultation';

interface IProps {
  user: IUser;
}

function Consultations({ user }: IProps) {
  return (
    <div className={styles.consultations}>
      {user.consultations.map((el) => (
        <Consultation consultation={el} key={el.date.getMilliseconds()}></Consultation>
      ))}
    </div>
  );
}

export default Consultations;
