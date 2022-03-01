import React, { useContext } from 'react';
import { Navbar, Button, Container, Nav } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { BNET_CLIENT_ID, BNET_REDIRECT_URI } from '../../config';
import "./Navbar.css";
import { AuthContext } from '../../services/Auth';


function NavbarComponent(){
    const { battletag } = useContext(AuthContext);

    return (
        <Navbar bg="transparent" variant="dark" expand="md" id="navbar">
            <Container fluid>
                <Navbar.Brand className="d-xl-flex align-items-xl-center" href="#">OWSCRIMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"/>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="navbar-nav ms-auto" style={{margin: "0 1rem 0 0"}} id="nav">
                        <Nav.Link className="navbar-link-text d-xl-flex justify-content-xl-start align-items-xl-center" href="/scrims">SCRIMS</Nav.Link>
                        {battletag && <Nav.Link className="navbar-link-text d-xl-flex justify-content-xl-start align-items-xl-center" href="#history">HISTORY</Nav.Link>}
                    </Nav>
                    {battletag ?
                        <Button
                            href="/profile"
                            style={{
                                fontSize: "1.25rem",
                                borderRadius: ".6rem",
                                padding: "10px 20px"}}>
                            {battletag}
                        </Button>:
                        <Button
                            href={`https://eu.battle.net/oauth/authorize?response_type=code&client_id=${BNET_CLIENT_ID}&redirect_uri=${BNET_REDIRECT_URI}`}
                            style={{
                                fontSize: "1.25rem",
                                borderRadius: ".6rem",
                                padding: "10px 20px"}}>
                                SIGN IN
                            <FaArrowRight style={{margin: "0 0 3px 10px"}}/>
                        </Button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;