import React from 'react'

import './dashboard.css'
import cat from '../../Img/Cat_Splash.svg'

function Dashboard() {

    return (
        <div className="container_dashboard">
            <div className='header'>
                <img src={cat} alt="Catinder" />
                <span>Catinder</span>
            </div>
            <div className="dashboard_body">
                Em construção...
            </div>
        </div>
    )
}

export default Dashboard;