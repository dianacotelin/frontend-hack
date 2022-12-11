import React from 'react'
import '../styles/Basic.scss'
import Header from './Header'

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import  { Chair} from "./assets/chair/Scene";
import  { Chair2} from "./assets/chair2/Scene";
import  { Chair3} from "./assets/chair3/Scene";
import { Environment, OrbitControls } from "@react-three/drei";

const Basic = () => {
    return (
        <div>
        <Header />

        <section className='basic-section'>
            <div class="row">
                <div class="column orange" >Retro</div>
                <div class="column orange">Modern</div>
                <div class="column orange">Victoriana</div>
                <div class="column orange">Baroc</div>
            </div>
            <div className="allcart">
            <div className="cart">
                 <Canvas camera={{ fov: 18 }} className="model">
                    <ambientLight intensity={1.25} />
                    <Suspense fallback={null}>
                    <Chair />
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
                <p>Scaun</p>

                    
            </div>

            <div className="cart">
                    {/* <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" alt="" /> */}
                    <Canvas camera={{ fov: 18 }} className="model">
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                        <Chair2 />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                    <p>Scaun</p>
                    
            </div>

            <div className="cart">
                    {/* <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" alt="" /> */}
                    <Canvas camera={{ fov: 18 }} className="model">
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                        <Chair3 />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                    <p>Scaun</p>
                    
            </div>


            <div className="cart">
                 <Canvas camera={{ fov: 18 }} className="model">
                    <ambientLight intensity={1.25} />
                    <Suspense fallback={null}>
                    <Chair2 />
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
                <p>Scaun</p>

                    
            </div>

            <div className="cart">
                    {/* <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" alt="" /> */}
                    <Canvas camera={{ fov: 18 }} className="model">
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                        <Chair3 />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                    <p>Scaun</p>
                    
            </div>

            <div className="cart">
                    {/* <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" alt="" /> */}
                    <Canvas camera={{ fov: 18 }} className="model">
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                        <Chair />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                    <p>Scaun</p>
                    
            </div>
            <div className="cart">
                 <Canvas camera={{ fov: 18 }} className="model">
                    <ambientLight intensity={1.25} />
                    <Suspense fallback={null}>
                    <Chair2 />
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
                <p>Scaun</p>

                    
            </div>

            <div className="cart">
                    {/* <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" alt="" /> */}
                    <Canvas camera={{ fov: 18 }} className="model">
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                        <Chair3 />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                    <p>Scaun</p>
                    
            </div>

            <div className="cart">
                    {/* <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" alt="" /> */}
                    <Canvas camera={{ fov: 18 }} className="model">
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                        <Chair />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                    <p>Scaun</p>
                    
            </div>

            </div>
        </section>
        </div>
    )
}

export default Basic