import book1 from '../assets/Book1.svg';
import book2 from '../assets/Book2.svg';

export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    category: 'bestsellers' | 'recommended';
}

export const booksData: Book[] = [
    {
        id: 1,
        title: 'Театр',
        author: 'Сомерсет Моэм',
        price: 999,
        image: book1,
        category: 'bestsellers'
    },
    {
        id: 2,
        title: 'Дама с камелиями',
        author: 'Александр Дюма',
        price: 999,
        image: book2,
        category: 'recommended'
    },
    {
        id: 3,
        title: 'Театр',
        author: 'Сомерсет Моэм',
        price: 999,
        image: book1,
        category: 'bestsellers'
    },
];
