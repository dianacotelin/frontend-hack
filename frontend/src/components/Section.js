import React from 'react'
import '../styles/Section.scss'


const Section = () => {
    return (
        <div>
        <div className="main-section">
            <div className="content">
                <h1>Alege mobila potrivita stilului tau</h1>
                <div className="button">
                <a class=".btn" href="/basic">Descopera</a>
                </div>
            </div>
            
            <div className="bottom-c">
                <p>10% reducere la toate produsele</p>
            </div>
        </div>

        <div className="second-section">
            <div className="allcart">
            <div className="cart">
                    <img src="http://www.mobilaretro.ro/35-large_default/comoda-vintage-sorento.jpg" alt="" />
                    <p>Retro</p>
                    
            </div>

            <div className="cart">
                    <img src="https://cb2.scene7.com/is/image/CB2/090122_super_furniture_livingRoom?wid=1000&qlt=50" alt="" />
                    <p>Moderna</p>
                    
            </div>

            <div className="cart">
                    <img src="https://i0.wp.com/www.stejarmasiv.ro/wp-content/uploads/2012/04/Living-in-stil-Rococco.png?w=572&ssl=1" alt="" />
                    <p>Victoriana</p>
                    
            </div>

            <div className="cart">
                    <img src="https://i.pinimg.com/564x/e6/c5/0b/e6c50b0d11dc7f555907801cb1039222.jpg" alt="" />
                    <p>Baroc</p>
                    
            </div>

            </div>
        </div>
        
        </div>
    )
}

export default Section