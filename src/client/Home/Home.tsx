import React, { useState } from 'react';
import axios from 'axios';

import './Home.scss';

const Home = () => {
    const [msg, setMsg] = useState('');

    const getMessage = () => {
        axios.get('/api/message')
        .then((response) => {
            setMsg(response.data);
        });
    }

    return (
        <div className="home">
            <div className="header">__________*...✨Wiii... Termine✨...*__________Ya saque 100 😅🙈? Espero  que si 🐰 </div>
            <div className="body">✨🖤 Last Part ...READY...Let's Go!🖤✨</div>

            <button 
                onClick={getMessage}
                className="btn"
            >Click Me</button>
            
            <div className="message">{msg}</div>
        </div>
    );
}

export default Home;
