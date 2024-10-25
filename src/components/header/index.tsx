import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import Input from '../input';
import styles from './header.module.css';
import logo from '../../assets/Logo.svg';

export const Header = () => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <img src={logo} alt="Logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                        <Input
                            label="Поиск.."
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li className={styles.navItem}>
                        <Button
                            label="О нас"
                            onClick={() => navigate('/about-us')}
                            color="menu"
                            size="small"
                        />
                        <Button
                            label="Каталог"
                            onClick={() => navigate('/catalog')}
                            color="menu"
                            size="small"
                        />
                        <Button
                            label="Корзина"
                            onClick={() => navigate('/shopping-cart')}
                            color="menu"
                            size="small"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
