import React from 'react';
import styles from './Home.module.scss';
import Header from '../../components/Header/Header';
import { UsersList } from '../../modules/UsersList';
import { UserAbout } from '../../modules/UserAbout';

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div className={styles.container}>
          <UsersList></UsersList>
          <UserAbout></UserAbout>
        </div>
      </main>
    </>
  );
}

export default Home;
