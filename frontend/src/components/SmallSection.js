import React from 'react'
import '../styles/Small.scss'

const SmallSection = ({image,type,name}) => {
    return (
        <section className='second-section'>
            <div className="allcart">
            <div className="cart">
                    <img src="http://www.mobilaretro.ro/35-large_default/comoda-vintage-sorento.jpg" alt="" />
                    <p>Retro</p>
                    <h1>Lorem ipsum dolor hea</h1>
            </div>

            <div className="cart">
                    <img src="https://cb2.scene7.com/is/image/CB2/090122_super_furniture_livingRoom?wid=1000&qlt=50" alt="" />
                    <p>Moderna</p>
                    <h1> dolor sit amet zara</h1>
            </div>

            <div className="cart">
                    <img src="https://i0.wp.com/www.stejarmasiv.ro/wp-content/uploads/2012/04/Living-in-stil-Rococco.png?w=572&ssl=1" alt="" />
                    <p>Victoriana</p>
                    <h1>Lorem ipsum dolor snn</h1>
            </div>

            <div className="cart">
                    <img src="https://i.pinimg.com/564x/e6/c5/0b/e6c50b0d11dc7f555907801cb1039222.jpg" alt="" />
                    <p>Baroc</p>
                    <h1>Lorem ipsum dolor sit</h1>
            </div>

            </div>
        </section>
    )
}

export default SmallSection