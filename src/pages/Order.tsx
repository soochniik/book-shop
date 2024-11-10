import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import Input from '../components/input';
import styles from './styles/order.module.css';
import book2 from '../assets/Book2.svg';

function Order(){

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return(
        <div className={styles.cart}>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>Оформление заказа</h1>
            <div className={styles.book}>
                <div className={styles.bookImage}>
                    <img src={book2} alt="Book 2"/>
                </div>
                <div className={styles.bookAbout}>
                    <div className={styles.bookTitle}>
                        <p>Дама с камелиями</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Александр Дюма</p>
                    </div>
                </div>
                <div className={styles.bookPrice}>
                    <p>999 ₽</p>
                </div>
            </div>
            
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