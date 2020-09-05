import React, { useState, useEffect } from 'react';
import Data from '../Data/Data';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    
    return (
        <div>
            {
                data.map(dt=> <Data data={dt}></Data>)
            }
        </div>
    );
};

export default Home;