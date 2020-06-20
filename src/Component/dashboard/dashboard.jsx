import React from 'react'

import './dashboard.css'
import cat from '../../Img/Cat_Splash.svg'
import cat_dashboard from '../../Img/Cat_Dashboard.jpg'
import coracao from '../../Img/coracao.png'
import mao_coracao from '../../Img/mao_coracao.png'
import seta_esquerda from '../../Img/seta_esquerda.png'


function Dashboard() {

    return (
        <div className="container_dashboard">
            <div className='header'>
                <img src={cat} alt="Catinder" />
                <span>Catinder</span>
            </div>
            <div className="dashboard_body">
                <div className="painel_imagem">
                    <img src={cat_dashboard} alt="Cat Dashboard" />
                    <div className="descricao">
                        <div className="itensDescricao">
                            <h2>Amora</h2>
                            <span>8 anos | Idoso</span>
                        </div>
                        <button>!</button>
                    </div>
                </div>
            </div>
            <div className="dashboard_footer">
                <div className="divButton">
                    <button>
                        <div className="float">
                            <img src={seta_esquerda} alt="seta" style={{ marginRight: -10 }} />
                            <img src={seta_esquerda} alt="seta" />
                        </div>
                    </button>
                    <span>Próximo</span>
                </div>
                <div className="divButton">
                    <button>
                        <img src={coracao} alt="coracao" />
                    </button>
                    <span>Adotar</span>
                </div>
                <div className="divButton">
                    <button>
                        <img src={mao_coracao} alt="mao_coracao" />
                    </button>
                    <span>Apadrinhar</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;