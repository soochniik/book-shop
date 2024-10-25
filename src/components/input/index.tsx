import React from 'react';
import styles from './input.module.css';

interface InputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.inputField}
                type="text"
                placeholder={label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
