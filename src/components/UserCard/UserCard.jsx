import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const UserCard = (props) => {
    const navigate = useNavigate()
    return (
        <div className={styles.UserCard} onClick={() => navigate('/orders', {
            state:{
                userId: props.userId,
                name: props.name,
            }
        })}>
            <div className={styles.Image}></div>
            <div className={styles.Info}>
                <h3>{props.name}</h3>
                <div className={styles.Actions}>
                    View Orders ➡️
                </div>
            </div>
        </div>
    )
}

export default UserCard;