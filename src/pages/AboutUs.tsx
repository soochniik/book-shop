import { useNavigate} from 'react-router-dom';
import { Button } from '../components/button';
import styles from './styles/about.module.css';
import shop from '../assets/Shop.svg';

function AboutUs() {

    const navigate = useNavigate();
    const handleAddressClick = () => {
        const address = encodeURIComponent('г. Москва, ул. Земляной Вал, д. 33');
        const url = `https://yandex.ru/maps/?text=${address}`;
        window.open(url, '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+79999999999';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:example@gmail.com';
    };

    return (
        <div className={styles.about}>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>О нас</h1>
            <div className={styles.welcome}>
                <img src={shop} alt="Книжный магазин" /> 
                <div className={styles.text}>
                    <p>Добро пожаловать в книжный магазин "Про Книги"!</p>
                    <p>Мы — небольшой, но уютный магазин, где каждая книга найдет своего читателя. Наши полки не переполнены, но каждое произведение тщательно отобрано, чтобы подарить вам незабываемые моменты чтения.</p>
                    <p>Наши особенности:</p>
                    <ul className={styles.featuresList}>
                        <li>Индивидуальный подход: Мы внимательно подбираем книги, чтобы каждая из них была особенной.</li>
                        <li>Книжные фестивали: Каждый месяц мы устраиваем книжные фестивали, где вы можете встретить авторов, обсудить любимые произведения и найти новые вдохновения.</li>
                    </ul>
                    <p>Мы ценим каждого нашего клиента и стремимся сделать процесс покупки книг максимально удобным и приятным.</p>
                    <p>Если у вас возникнут вопросы, наша служба поддержки всегда готова помочь!</p>
                    <div className={styles.text2}>
                        <p>С уважением,</p>
                        <p>Команда "Про Книги"</p>
                    </div>
                </div>
            </div>
            <h1>Контакты</h1>
            <div className={styles.contacts}>
                <p>Наш телефон: <Button
                                label="+7 (999) 999-99-99"
                                onClick={handlePhoneClick}
                                color="menu"
                                size="small"
                            />
                </p>
                <p>Наш e-mail: <Button
                                label="example@gmail.com"
                                onClick={handleEmailClick}
                                color="menu"
                                size="small"
                            />
                </p>
                <p>Наш адрес: <Button
                                    label="г. Москва, ул. Земляной Вал, д. 33"
                                    onClick={handleAddressClick}
                                    color="menu"
                                    size="small"
                                />
                </p>
            </div>
        </div>
    );
};

export default AboutUs;