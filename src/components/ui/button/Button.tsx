import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
