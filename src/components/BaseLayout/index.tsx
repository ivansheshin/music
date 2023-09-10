import React from 'react';

import styles from './BaseLayout.module.css';
import TheHeader from "../TheHeader";
import NewsList from "../NewsList";

export default function BaseLayout() {
  return (
      <div className={styles['page-container']}>
        <TheHeader/>
        <main className={styles.main}>
          <NewsList/>
        </main>
        <footer>
          123
        </footer>
      </div>
  );
}
