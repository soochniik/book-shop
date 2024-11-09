import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';

function Cart(){

    const navigate = useNavigate();

    return(
        <div>
            <Button
                label="Назад"
                onClick={() => navigate(-1)}
                color="menu"
                size="small"
            />
            <h1>Оформление заказа</h1>
        </div>
    );
}

export default Cart