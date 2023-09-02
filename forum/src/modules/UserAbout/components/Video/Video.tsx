import React, { useState } from 'react';
import styles from './Video.module.scss';
import etc from '../../../../assets/etc.svg';
import { IVideo } from '../../../../interfaces&types/interfaces&types';

interface IProps {
  video: IVideo;
}

function Video({ video }: IProps) {
  return (
    <div className={styles.video}>
      <div className={styles.left}>
        <img className={styles.image} src={video.image} alt="video" />
        <div className={styles.info}>
          <div title={video.title}>
            {video.title.slice(0, 40)}
            {video.title.length > 40 && '...'}
          </div>
          <div className={styles.name}>{video.name}</div>
        </div>
      </div>
      {video.date && video.durationDays && (
        <div className={styles.right}>
          <span className={styles.date}>
            {video.date.toLocaleDateString()}
            {' - '}
            {new Date(
              video.date.setDate(video.date.getDate() + video.durationDays)
            ).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
}

export default Video;
