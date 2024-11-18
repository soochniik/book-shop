import { useNavigate} from 'react-router-dom';
import { Button } from '../components/button';
import styles from './styles/fest.module.css';
import fest1 from '../assets/Fest1.svg';
import fest2 from '../assets/Fest2.svg';
import fest3 from '../assets/Fest3.svg';
import forfest from '../assets/forFest.svg';

function Fest() {

    const navigate = useNavigate();

    return (
        <div className={styles.fest}>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>Книжные фестивали</h1>
            
            <div className={styles.text}>
                <p>Каждое 25-е число месяца наш книжный магазин "Про Книги" превращается в настоящий праздник литературы! Мы рады пригласить вас на наши ежемесячные книжные фестивали, где вы сможете погрузиться в мир книг, встретить интересных людей и получить незабываемые впечатления.</p>
                <div className={styles.h2}>
                    <p>Что вас ждет на наших фестивалях:</p>
                </div>
                <ul className={styles.featuresList}>
                    <li>Встречи с авторами.</li>
                    <li>Автограф-сессии.</li>
                    <li>Литературные чтения.</li>
                    <li>Книжные обсуждения.</li>
                    <li>Мастер-классы и воркшопы.</li>
                    <li>Скидки и специальные предложения.</li>
                </ul>
                <div className={styles.festimage}>
                    <img src={fest1} alt="Fest1" /> 
                    <img src={forfest} alt="forFest" /> 
                    <img src={fest2} alt="Fest2" /> 
                    <img src={forfest} alt="forFest" /> 
                    <img src={fest3} alt="Fest3" /> 
                </div>
                <div className={styles.h2}>
                    <p>Как принять участие:</p>
                </div>
                <ul className={styles.part}>
                    <li>Дата и время: Каждое 25-е число месяца с 10:00 до 18:00.</li>
                    <li>Место проведения: Книжный магазин "Про Книги" (адрес указан на нашем сайте).</li>
                </ul>
                <p>Присоединяйтесь к нам и станьте частью нашего литературного сообщества! Мы ждем вас на наших книжных фестивалях, чтобы вместе наслаждаться миром книг и делиться любовью к чтению.</p>
                <div className={styles.text2}>
                    <p>С уважением,</p>
                    <p>Команда "Про Книги"</p>
                </div>
            </div>
        </div>
    );
};

export default Fest;
