import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import backgroundImage from "../../assets/images/background.jpg";
import { AuthContext } from '../../services/Auth';
import "./Home.css";

const Home = () => {
    const { token } = useContext(AuthContext);

    useEffect(() => {
    }, [])

    return (
        <Row id="home-page">
            <Col className="g-0">
                <img id="home-page-image" alt="home-page-image" src={backgroundImage}/>
            </Col>
            <Col id="home-page-title-parent">
                <div className='text-center' id="home-page-title-div">
                    <h1 id="home-page-title" className="orange">OWSCRIMS</h1>
                    <h4 id="home-page-description">A community hub where you can organise scrims or just play serious competitive matches where no one flames.</h4>
                </div>
            </Col>
        </Row>
    )
}

export default Home;