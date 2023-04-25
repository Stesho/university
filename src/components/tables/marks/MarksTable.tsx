import React from 'react';
import styles from './MarksTable.module.scss';
import examMark from '../../../core/types/examMark';
import MarksRow from './MarksRow/MarksRow';

interface MarksTableProps {
  examMarks: examMark[];
}

const MarksTable = (props: MarksTableProps) => {
  return (
    <div>
      {props.examMarks.map((mark) => (
        <MarksRow examMark={mark} />
      ))}
    </div>
  );
};

export default MarksTable;
