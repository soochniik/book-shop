import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import styles from './book.module.css';
import bookImage from '../assets/Book.svg';

function Book() {
    const navigate = useNavigate();

    return (
        <div className={styles.book}>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>Дама с камелиями</h1>
            <div className={styles.bookAuthor}>
                <p>Александр Дюма</p>
            </div>
            <div className={styles.bookAbout}>
                <div className={styles.bookImage}>
                    <img src={bookImage} alt="BookImage" />
                </div>
                <div className={styles.about}>
                    <div className={styles.bookDesc}>
                        <p>Нестареющий роман о великой любви и страшной трагедии. Сюжет романа явился основой для одноименной пьесы, которая впоследствии многократно экранизировалась и послужила либретто к гениальной опере Джузеппе Верди «Травиата». Роман о любви прекрасной, смертельно больной «королевы полусвета» и юного аристократа – любви страстной, трагической, заведомо обреченной – не уступает по драматизму «Травиате» и превосходит даже лучшие экранизации.</p>
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
                            <p>АСТ</p>
                            <p>Neoclassic</p>
                            <p>Эксклюзивная классика</p>
                            <p>2024</p>
                            <p>320</p>
                            <p>Мягкий переплет</p>
                            <p>4000</p>
                            <p>16+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bookPrice1}>
                <p>999 ₽</p>
            </div>
            <Button
                label="В корзину"
                onClick={() => alert('Товар добавлен в корзину!')}
                color="button"
                size="small"
            />
        </div>
    );
}

export default Book;
