import examMark from './examMark';

interface RecordBook {
  id: number;
  number: number;
  examMarks: examMark[];
}

export default RecordBook;
