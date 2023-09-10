import React from 'react';

import styles from './BaseLayout.module.css';
import TheHeader from "../TheHeader";

export default function BaseLayout() {
  return (
      <div className={styles['page-container']}>
        <TheHeader/>
        <main className={styles.page}>
          <div>
            123
          </div>
        </main>
        <footer>
          123
        </footer>
      </div>
  );
}
