import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './style.module.css';
import axios from 'axios';
import UserCard from '../../components/UserCard/UserCard';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://assessment.api.vweb.app/products')
        .then(res => {
            setProducts(res.data);
            console.log(res.data)
        });
    },[])

    return (
        <>
            <Header />
            <div className={styles.Products}>
                    {products.length == 0 ? <div className={styles.Empty}>Loading...</div> 
                    : <>
                        <h1 style={{textAlign:"center"}}>Products</h1>
                        <div className={styles.List}>
                            {products.map((prod) => {
                                return <ProductCard key={prod.user_id} name={prod.name} id={prod.user_id} stock={prod.stock} price={prod.selling_price}/>
                            })}
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Products;