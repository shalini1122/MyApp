import React from 'react'
import "../App.css"

export const Hero = () => {
  return (
    <div>
        <section class="hero">
                <div class="hero-content">
                    <h2>Create yourself for the metaverse</h2>
                    <p>A character custom collection is joining the NFT space on
                        Opensea.</p>
                </div>
                <div class="buttons">
                    <a href='#btn' className="btn1">View on Opensea</a>
                    <a href='#btn' className="btn2">View Roadmap</a>
                </div>
            </section>
    </div>
  )
}
export default Hero;