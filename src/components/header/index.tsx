import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import styles from './header.module.css';
import logo from '../../assets/Logo.svg';

export const Header = () => {

    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <img src={logo} alt="Logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    </li>
                    <li className={styles.navItem}>
                        <Button
                            label="Каталог"
                            onClick={() => navigate('/catalog')}
                            color="menu"
                            size="small"
                        />
                        <Button
                            label="О нас"
                            onClick={() => navigate('/about-us')}
                            color="menu"
                            size="small"
                        />
                        <Button
                            label="О фестивалях"
                            onClick={() => navigate('/fest')}
                            color="menu"
                            size="small"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
