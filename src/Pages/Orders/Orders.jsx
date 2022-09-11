import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./style.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const userData = location.state;

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(location);
    axios.get("https://assessment.api.vweb.app/orders").then((res) => {
      const data = res.data.filter((ord) => ord.user_id == userData.userId);
      data.sort((a, b) => a.order_date > b.order_date);
      setOrders(data);
      console.log(data)
    });
  }, []);


  const getProd = (prodId) => {
    return products.filter((prod) => prod.product_id == prodId)
  }

  return (
    <>
      <Header />
      <div className={styles.Orders}>
        {orders.length == 0 ? (
          <div className={styles.Empty}>Loading...</div>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>{userData.name}'s - Orders</h1>
            <div className={styles.List}>
              {orders.map((ord) => {
                return <OrderCard key={ord.order_id} id={ord.order_id} quantity={ord.quantity} prod={getProd(ord.product_id)} date={ord.order_date}/>;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Orders;
