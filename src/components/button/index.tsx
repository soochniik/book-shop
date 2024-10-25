import styles from './Button.module.css';
interface ButtonProps {
    label: string;
    onClick: () => void;
    color?: 'button' | 'menu';
    size?: 'small' | 'medium' | 'large';
}
export const Button = ({ label, onClick, color = 'button', size = 'small' }: ButtonProps) => {
    return (
        <button
            className={`${styles.btn} ${styles[`btn-${color}`]}
            ${styles[`btn-${size}`]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
