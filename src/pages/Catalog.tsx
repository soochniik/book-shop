import React, { useEffect, useState } from 'react';
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';
import styles from './styles/catalog.module.css';
import { Book } from './booksData';

const Catalog: React.FC = () => {
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

    const renderBooks = () => {
        const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

        return sortedBooks
            .map(book => (
                <div key={book.id} className={styles.book}>
                    <div className={styles.bookImage} onClick={() => navigate(`/book?id=${book.id}`)}>
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
                        onClick={() => navigate(`/order?id=${book.id}`)}
                        color="button"
                        size="small"
                    />
                </div>
            ));
    };

    return (
        <div className={styles.catalog}> 
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>Каталог</h1>
            <div className={styles.books}>
                {renderBooks()}
            </div>
        </div>
    );
};

export default Catalog;
