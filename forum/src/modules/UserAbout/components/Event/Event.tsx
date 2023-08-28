import React, { useState } from 'react';
import styles from './Event.module.scss';
import vebinar from '../../../../assets/vebinar.svg';
import clock from '../../../../assets/clock.svg';
import calendar from '../../../../assets/calendar.svg';
import { IEvent } from '../../../../interfaces&types/interfaces&types';

interface IProps {
  event: IEvent;
}

function Event({ event }: IProps) {
  return (
    <div className={styles.event}>
      <img className={styles.image} src={event.image} alt="video" />
      <div className={styles.info}>
        <div title={event.title}>
          {event.title.slice(0, 60)}
          {event.title.length > 60 && '...'}
        </div>
        <div className={styles.more}>
          <div className={styles.item}>
            <img src={vebinar} alt="" />
            <span>{event.format[0].toUpperCase() + event.format.slice(1)}</span>
          </div>
          <div className={styles.item}>
            <img src={calendar} alt="" />
            <span>
              {event.date
                .toLocaleString('ru', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
                .slice(0, -3)}
            </span>
          </div>
          <div className={styles.item}>
            <img src={clock} alt="" />
            <span>{event.date.toLocaleTimeString().slice(0, -3)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
