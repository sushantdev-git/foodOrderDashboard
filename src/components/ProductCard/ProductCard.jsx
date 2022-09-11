import styles from './style.module.css';

const ProductCard = (props) => {
    return (
        <div className={styles.ProductCard}>
            <h4>{props.name}</h4>
            <div className={styles.Info}>
                <p>Stocks - {props.stock}</p>
                <p>Price - ${props.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;