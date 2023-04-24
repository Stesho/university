import Author from './author';
import Review from './review';

interface Book {
  id: number;
  name: string;
  author: Author;
  ISBN: string;
  description: string;
  image: string;
  reviews: Review[];
}

export default Book;
