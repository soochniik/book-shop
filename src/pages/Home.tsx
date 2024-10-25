import React from 'react';
import { Button } from '../components/button';
import sale from '../assets/Sale.svg';
import book1 from '../assets/Book1.svg';
import book2 from '../assets/Book2.svg';
import nbook from '../assets/New.svg';
import styles from './home.module.css';

function Home() {
    return (
        <div className={styles.home}> 
            <div className={styles.sale}>
                <img src={sale} alt="Sale"/>
                <div className={styles.new}>
                    <h1>Новинка</h1>
                    <img src={nbook} alt="New"/>
                </div>
            </div>
            <h1>Бестселлеры</h1>
            <div className={styles.books}>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book1} alt="Book 1"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Театр</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Сомерсет Моэм</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book1} alt="Book 1"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Театр</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Сомерсет Моэм</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book1} alt="Book 1"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Театр</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Сомерсет Моэм</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book1} alt="Book 1"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Театр</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Сомерсет Моэм</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
            </div>
            <h1>Рекомендуем</h1>
            <div className={styles.books}>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book2} alt="Book 2"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Дама с камелиями</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Александр Дюма</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book2} alt="Book 2"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Дама с камелиями</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Александр Дюма</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book2} alt="Book 2"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Дама с камелиями</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Александр Дюма</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
                <div className={styles.book}>
                    <div className={styles.bookImage}>
                        <img src={book2} alt="Book 2"/>
                    </div>
                    <div className={styles.bookPrice}>
                        <p>999 ₽</p>
                    </div>
                    <div className={styles.bookTitle}>
                        <p>Дама с камелиями</p>
                    </div>
                    <div className={styles.bookAuthor}>
                        <p>Александр Дюма</p>
                    </div>
                    <Button
                        label="В корзину"
                        onClick={() => alert('Товар добавлен в корзину!')}
                        color="button"
                        size="small"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
