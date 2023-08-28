import React, { useState } from 'react';
import styles from './Videos.module.scss';
import { IUser } from '../../../../interfaces&types/interfaces&types';
import Video from '../Video/Video';

interface IProps {
  user: IUser;
}

function Videos({ user }: IProps) {
  return (
    <div className={styles.videos}>
      {user.videos.map((el, index) => (
        <Video video={el} key={el.date?.getMilliseconds() || index}></Video>
      ))}
    </div>
  );
}

export default Videos;
