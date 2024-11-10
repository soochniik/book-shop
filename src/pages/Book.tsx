import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/button';
import styles from './styles/book.module.css';
import { booksData } from './booksData';
import type { Book } from './booksData';

function Book() {
    const navigate = useNavigate();
    const location = useLocation();
    const [book, setBook] = useState<Book | null>(null);

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
        <div className={styles.book}>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            {book ? (
                <>
                    <h1>{book.title}</h1>
                    <div className={styles.bookAuthor}>
                        <p>{book.author}</p>
                    </div>
                    <div className={styles.bookAbout}>
                        <div className={styles.bookImage}>
                            <img src={book.imagebig} alt={book.title} />
                        </div>
                        <div className={styles.about}>
                            <div className={styles.bookDesc}>
                                <p>{book.desc}</p>
                            </div>
                            <div className={styles.bookCharact}>
                                <div className={styles.ch1}>
                                    <p>Издательство</p>
                                    <p>Издательский бренд</p>
                                    <p>Серия</p>
                                    <p>Год издания</p>
                                    <p>Количество страниц</p>
                                    <p>Тип обложки</p>
                                    <p>Тираж</p>
                                    <p>Возрастные ограничения</p>
                                </div>
                                <div className={styles.ch2}>
                                    <p>{book.publish}</p>
                                    <p>{book.brand}</p>
                                    <p>{book.series}</p>
                                    <p>{book.year}</p>
                                    <p>{book.pages}</p>
                                    <p>{book.cover}</p>
                                    <p>{book.edition}</p>
                                    <p>{book.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bookPrice1}>
                        <p>{book.price} ₽</p>
                    </div>
                    <Button
                        label="Оформить заказ"
                        onClick={() => navigate(`/order?id=${book.id}`)}
                        color="button"
                        size="small"
                    />
                </>
            ) : (
                <p>Книга не найдена</p>
            )}
        </div>
    );
}

export default Book;
