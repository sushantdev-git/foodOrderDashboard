import styles from './style.module.css';

const OrderCard = (props) => {
    console.log(props);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className={styles.OrderCard}>
            <div className={styles.Image}>

            </div>
            <div className={styles.Info}>
                <h4>{props.prod[0].name}</h4>
                <p>#{props.id}</p>
                <p>{new Date(+props.date).toLocaleString('en-US', options)}</p>
                <p>Quantity: {props.quantity}</p>
            </div>
            <div className={styles.Total}>
                
                <p>Total</p>
                <p style={{fontWeight:"bold"}}>${props.prod[0].selling_price*props.quantity}</p>
            </div>
        </div>
    )
}

export default OrderCard;