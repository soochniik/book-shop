import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/button';
import Input from '../components/input';
import styles from './styles/order.module.css';
import type { Book } from './booksData';

function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputName, setInputName] = useState<string>('');
    const [inputLast, setInputLast] = useState<string>('');
    const [inputNumber, setInputNumber] = useState<string>('');
    const [inputEmail, setInputEmail] = useState<string>('');
    const [book, setBook] = useState<Book | null>(null);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };
    const handleLastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputLast(event.target.value);
    };
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(event.target.value);
    };

    useEffect(() => {
        const bookId = new URLSearchParams(location.search).get('id');

        if (bookId) {
            const fetchBook = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:5000/api/books/${bookId}`);
                    const data = await response.json();
                    setBook(data);
                } catch (error) {
                    console.error('Ошибка при загрузке книги:', error);
                }
            };

            fetchBook();
        }
    }, [location.search]);

    const handleOrderSubmit = async () => {
        if (!book) return;

        const orderData = {
            first_name: inputName,
            last_name: inputLast,
            phone: inputNumber,
            email: inputEmail,
            book_id: book.id
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                alert('Заказ оформлен!');
                navigate('/');
            } else {
                alert('Ошибка при оформлении заказа');
            }
        } catch (error) {
            console.error('Ошибка при отправке заказа:', error);
            alert('Ошибка при оформлении заказа');
        }
    };

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
                        <img src={`/${book.image}`} alt={book.title} />
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
                    value={inputName}
                    onChange={handleNameChange}
                />
                <Input
                    label="Фамилия"
                    value={inputLast}
                    onChange={handleLastChange}
                />
                <Input
                    label="Номер телефона"
                    value={inputNumber}
                    onChange={handleNumberChange}
                />
                <Input
                    label="E-mail"
                    value={inputEmail}
                    onChange={handleEmailChange}
                />
                <Button
                    label="Оформить заказ"
                    onClick={handleOrderSubmit}
                    color="button"
                    size="small"
                />
            </div>
        </div>
    );
}

export default Order;
