import React from 'react';
import styles from './MarksRow.module.scss';
import examMark from '../../../../core/types/examMark';

interface MarksRowProps {
  examMark: examMark;
}

const MarksRow = (props: MarksRowProps) => {
  return <div className={styles.mark}>{props.examMark.mark}</div>;
};

export default MarksRow;
