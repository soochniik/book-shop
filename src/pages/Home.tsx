import React, { useEffect, useState } from 'react';
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';
import sale from '../assets/Sale.svg';
import nbook from '/Book13.svg';
import styles from './styles/home.module.css';
import { Book } from '../types/booksData'

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/books');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Ошибка при загрузке книг:', error);
            }
        };

        fetchBooks();
    }, []);
    
    const renderBooks = (category: 'bestsellers' | 'recommended') => {
        return books
            .filter(book => book.category === category)
            .map(book => (
                <div key={book.id} className={styles.book}>
                    <div className={styles.bookImage} onClick={() => navigate(`/book/${book.id}`)}>
                        <img src={`/${book.image}`} alt={book.title} />
                    </div>
                    <div className={styles.bookPrice}>
                        <p>{book.price} ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>{book.title}</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>{book.author}</p>
                    </div>
                    <Button
                        label="Оформить заказ"
                        onClick={() => navigate(`/order/${book.id}`)}
                        color="button"
                        size="small"
                    />
                </div>
            ));
    };

    return (
        <div className={styles.home}> 
            <div className={styles.sale}>
                <img src={sale} alt="Sale" onClick={() => navigate(`/fest`)} />
                <div className={styles.new}>
                    <h1>Новинка</h1>
                    <img src={nbook} alt="New" onClick={() => navigate(`/book/2`)}/>
                </div>
            </div>
            <h1>Бестселлеры</h1>
            <div className={styles.books}>
                {renderBooks('bestsellers')}
            </div>
            <h1>Рекомендуем</h1>
            <div className={styles.books}>
                {renderBooks('recommended')}
            </div>
        </div>
    );
};

export default Home;