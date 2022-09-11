import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.Header}>
            <div style={{flex: 1}}></div>
            <div className={styles.Nav}>
                <h3 onClick={() => navigate('/users')}>Users</h3>
                <h3 onClick={() => navigate('/products')}>Products</h3>
            </div>
        </div>
    )
}

export default Header;