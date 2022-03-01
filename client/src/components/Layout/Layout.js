import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import "./Layout.css";

import Navbar from '../Navbar';
import { AuthVerify } from '../../services/Auth';

function Layout(){
    return (
        <Container fluid className="justify-content-xl-start" id="layout-container" style={{
            width: "100vw",
            height: "auto",
            minHeight: "100vh",
        }}>
            <AuthVerify/>
            <Row><Col><Navbar/></Col></Row>
            <Outlet/>
        </Container>
    )
}

export default Layout;