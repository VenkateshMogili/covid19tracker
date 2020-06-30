import React from 'react';

import styles from './Footer.module.css';

const Footer = () =>{
  return (
    <div>
    <p className={styles.developer}>Developer: Venkatesh Mogili </p>
    <a href="https://github.com/VenkateshMogili" target="_blank" className={styles.url}>Github 1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/venkatesh-m-xelp" target="_blank" className={styles.url}>Github 2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://shorturl.at/fhtI1" target="_blank" className={styles.url}>My Projects</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.youtube.com/watch?v=iePQZOc30VI" target="_blank" className={styles.url}>Task Hacker</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="mailto:mogilivenkatesh3@gmail.com?subject=Regarding Covid19 Tracker" target="_blank" className={styles.url}>Gmail</a>
    </div>
  );
}

export default Footer;
