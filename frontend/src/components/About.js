import React from 'react'
import Header from './Header'
import '../styles/About.scss'


const About = () => {



    return (
        <div>
        <Header />

        <div class="about-section">
            <h2>Ce culori se potrivesc cu camera ta</h2>
            <div className="form-form">
                <form>
                    
                    <br/>
                    <label>
                    <h2>Incarca poza (.jpeg)</h2>
                    <label htmlFor="file-upload" className="bigbox">
                        drag & drop image or click to upload
                    </label>
                    <br/>

                    <input type="file" id="file-upload"
                        accept=".jpg, .jpeg, .png, .gif"
                        placeholder="drag & drop image or click to upload"
                        />
                    </label>
                    <br/>
                <button type="submit">Trimite</button>
                </form>
            </div>

            <div className="colors">
                <h2>Culori</h2>
                
            </div>
        </div>
        </div>
    )
}

export default About