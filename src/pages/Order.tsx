import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/button';
import Input from '../components/input';
import styles from './styles/order.module.css';
import { booksData, Book } from './booksData';

function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputValue, setInputValue] = useState<string>('');
    const [book, setBook] = useState<Book | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const bookId = queryParams.get('id');

        if (bookId) {
            const selectedBook = booksData.find(book => book.id === parseInt(bookId, 10));
            if (selectedBook) {
                setBook(selectedBook);
            }
        }
    }, [location.search]);

    return (
        <div className={styles.cart}>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>Оформление заказа</h1>
            {book ? (
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book.image} alt={book.title} />
                    </div>
                    <div className={styles.bookAbout}>
                        <div className={styles.bookTitle}>
                            <p>{book.title}</p>
                        </div>
                        <div className={styles.bookAuthor}>
                            <p>{book.author}</p>
                        </div>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>{book.price} ₽</p>
                    </div>
                </div>
            ) : (
                <p>Книга не найдена</p>
            )}

            <div className={styles.order}>
                <Input
                    label="Имя"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Input
                    label="Фамилия"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Input
                    label="Номер телефона"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button
                    label="Оформить заказ"
                    onClick={() => alert('Заказ оформлен!')}
                    color="button"
                    size="small"
                />
            </div>
        </div>
    );
}

export default Order;
