import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import './Home.css';
import homeImg from '../../images/pexels.jpg';

const Home = () => (
    <Card className="text-black">
        <Card.Img className="card-img" src={homeImg} alt="img"/>
        <Card.ImgOverlay>
            <Card.Title className="mt-5">Organic, Vegan Skincare Products Australia</Card.Title>
                <NavLink to="/botani/products" >
                    <Button variant="success mt-3">SHOP NOW</Button>
                </NavLink>
        </Card.ImgOverlay>
    </Card>
)
  
export default Home;
