import React from 'react';
import { observer } from 'mobx-react-lite';
import notebookState from '../../store/store';
import plus from '../../../../assets/plus.svg';
import styles from './Menu.module.scss';
import { INotebook } from '../../../../interfaces&types/interfaces&types';

const Menu = observer(() => {
  const page = notebookState.page;
  const pages: INotebook[] = ['заметки', 'консультации', 'видео', 'мероприятия'];
  return (
    <div className={styles.menu}>
      <ul>
        {pages.map((el) => (
          <li
            key={el}
            className={page == el ? styles.active : ''}
            onClick={(e) => notebookState.setPage(el)}
          >
            {el.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className={styles.new}>
        <span className={styles.label}>Новая заметка</span>
        <button className={styles.plus}>
          <img src={plus} alt="Add" />
        </button>
      </div>
    </div>
  );
});

export default Menu;
