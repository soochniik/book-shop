import React from 'react';
import './input.css';

interface InputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
    return (
        <div className="input-container">
            <input
                className="input-field"
                type="text"
                placeholder={label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
