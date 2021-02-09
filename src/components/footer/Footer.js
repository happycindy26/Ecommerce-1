import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <ul className="nav justify-content-center mx-5" >
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://www.facebook.com/"><i class="fab fa-facebook-square">Facebook</i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://www.twitter.com"><i class="fab fa-twitter-square">Twitter</i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://www.linkedin.com"><i class="fab fa-linkedin">LinkedIn</i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://www.youtube.com"><i class="fab fa-youtube-square">Youtube</i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://www.instagram.com/"><i class="fab fa-instagram-square">Instagram</i></a>
                    </li>
                </ul>
                <p className="nav justify-content-center mx-5">&copy; Botani 2021</p> 
            </div>
        )
    }
}

export default Footer;