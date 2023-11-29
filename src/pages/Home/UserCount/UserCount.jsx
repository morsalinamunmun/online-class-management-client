
//import { useEffect, useState } from 'react';
import img from '../../../assets/online-classes-illustration-2.jpg'
//import axios from 'axios';

const UserCount = () => {
    // const [users, setUsers] = useState([]);
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/users')
    //     .then(res=> setUsers(res.data))
    // }, [])
    return (
        <div className="hero max-w-4xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='bg-teal-100 space-y-5 p-5 h-48'>
                    <h2 className='font-bold'>Total user card: </h2>
                    <p className='font-bold'>Total Class:</p>
                    <p className='font-bold'>Total Enrollment:</p>
                </div>
            </div>
        </div>
    );
};

export default UserCount;