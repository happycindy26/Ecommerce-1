import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="Footer">
        <ul className="nav justify-content-center mx-5" >
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.facebook.com/"><i className="fab fa-facebook-square">Facebook</i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://www.twitter.com"><i className="fab fa-twitter-square">Twitter</i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://www.youtube.com"><i className="fab fa-youtube-square">Youtube</i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://www.instagram.com/"><i className="fab fa-instagram-square">Instagram</i></a>
            </li>
        </ul>
        <p className="nav justify-content-center mx-5">&copy; Botani 2021</p> 
    </div>
);

export default Footer;