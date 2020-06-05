import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import './splash.css'
import cat from '../../Img/Cat_Splash.svg'

function Splash() {
    const [redireciona, setRedireciona] = useState(false);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    useEffect(() => {
        sleep(3000).then(() => setRedireciona(true))
    }, []);

    return (

        <div className="container_splash">
            <img src={cat} alt="Catinder" />
            <h1>Catinder</h1>
            {redireciona && <Redirect to='/login' />}
        </div>
    )

}

export default Splash;