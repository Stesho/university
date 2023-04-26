import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin-icon.svg';
import { ReactComponent as VkIcon } from '../../assets/icons/vk-icon.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.rights}>
          <div>&copy; All Rights Reserved, 2023</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
