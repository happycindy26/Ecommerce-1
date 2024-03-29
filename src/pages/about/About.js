import React from 'react';

import video from '../../images/Botani_Insta.mp4';
import './About.css';

const About = () => (
    <div className="About">
        <h3 className="text-center mt-5">Organic, Vegan Skincare Products Australia</h3>
        <div className="intro">
        <iframe title="Botani Vedio" className='video mx-5'
            width=""
            height="300"
            src={video}
            frameborder="">
        </iframe>
        
        <div className="mx-5 my-5">
            <p>100% botanically based natural problem-solving skincare and pharmaceutical products. Our skincare products contain a blend of high quality certified organic ingredients and skin-friendly plant actives that are in sync with your skin.</p>
            <p>At Botani, we only use natural plant-based ingredients. Each product is formulated using olive derived plant actives, including our signature ingredient Olive Squalene, traditional herbal extracts, potent superfoods and Australian native plant extracts. Our products are vegan certified and cruelty-free.</p>
            </div>
        </div>
    </div>  
);

export default About;
