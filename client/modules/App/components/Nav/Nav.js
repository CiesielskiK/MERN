import React from 'react';
import { Link } from 'react-router';
import styles from './Nav.css';

const Nav = () => {
  return (
    <ul className={styles.NavLinks}>
      <Link className={styles.Link} to={'/home'}>
        Home
      </Link>
      <Link className={styles.Link} to={'/about'}>
        About
      </Link>
      <Link className={styles.Link} to={'/'}>
        Posts
      </Link>
    </ul>
  );
};

export default Nav;
