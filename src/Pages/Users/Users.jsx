import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './style.module.css';

import axios from 'axios';
import UserCard from '../../components/UserCard/UserCard';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://assessment.api.vweb.app/users')
        .then(res => setUsers(res.data));

        console.log(users)
    },[]);

    return (
        <>
            <Header />
            <div className={styles.Users}>
                {users.length == 0 ? <div className={styles.Empty}>Loading...</div> 
                : <>
                    <h1 style={{textAlign:"center"}}>Users</h1>
                    <div className={styles.List}>
                        {users.map((ele) => {
                            return <UserCard name={ele.name} userId={ele.user_id}/>
                        })}
                    </div>
                </>}
            </div>
        </>
    )
}

export default Users;