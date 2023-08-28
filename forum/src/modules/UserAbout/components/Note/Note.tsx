import React, { useState } from 'react';
import styles from './Note.module.scss';
import { INote } from '../../../../interfaces&types/interfaces&types';
import Dropdown from '../../ui/Dropdown/Dropdown';

interface IProps {
  note: INote;
}

const Note = ({ note }: IProps) => {
  return (
    <div className={styles.note}>
      <div className={styles.text}>
        <span className={styles.date}>{note.date.toLocaleDateString()}</span>
        <span>{note.note}</span>
      </div>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Note;
