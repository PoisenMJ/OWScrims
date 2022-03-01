import React, { useEffect } from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

// IMAGE IMPORTS (COULD FIND A BETTER WAY FOR THIS)
import TANK from "../../assets/images/tank-dark.png";
import DPS from "../../assets/images/damage-dark.png";
import SUPPORT from "../../assets/images/support-dark.png";

// IMPORT ICONS
import { FaSign, FaSignOutAlt } from 'react-icons/fa';

const Scrim = () => {
    const { scrim_id } = useParams();

    useEffect(() => {
        
    }, [])

    return (
        <>
            <Row>
                <Col className="d-xl-flex justify-content-evenly align-items-xl-center">
                    <Row>
                        <Col className="d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center align-items-xl-center">
                            <span style={{fontSize: "40px"}}>EU</span>
                        </Col>
                        <Col className="d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                            <span style={{fontSize: "35px"}}>BO3</span>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-xl-flex justify-content-center align-items-xl-center">
                    <h1 className="display-3 text-center d-xl-flex my-auto">4.2-4.4</h1>
                </Col>
                <Col className="d-md-flex d-lg-flex d-xl-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                    <span style={{fontSize: "30px"}}>9 / 12</span>
                </Col>
            </Row>
            <Row>
                <Col className="col-4" style={{backgroundColor: "rgba(255,255,255,0)"}}>
                    <Row className="scrim-left-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingRight: "6px", paddingLeft: "6px"}}>
                        <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-md-flex d-xl-flex justify-content-md-end align-items-md-center justify-content-xl-center align-items-xl-center"><img src={TANK} style={{width: "35px"}}/></Col>
                        <Col className="col-2 d-md-flex d-xl-flex me-auto justify-content-md-center align-items-md-center justify-content-xl-center"><img src="assets/img/1.png" style={{height: "50px"}}/></Col>
                        <Col className="col-11 col-md-8 col-lg-8 col-xl-9 col-xxl-9 d-grid me-auto"><span className="text-truncate mt-auto" data-bs-toggle="tooltip" title="Nightbot">FANCYPANTS<span className="battle-tag-number">#4324</span></span><span className="grandmaster-color">4312</span></Col>
                    </Row>
                    <Row className="scrim-left-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={TANK} style={{width: "35px"}}/></Col>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src="assets/img/3.png" style={{height: "50px"}}/></Col>
                        <Col className="col-11 col-md-6 col-lg-6 col-xl-7 col-xxl-7 d-grid me-auto"><span className="text-truncate" data-bs-toggle="tooltip" data-bss-tooltip="" title="Nightbot">FANCYPANTS<span className="battle-tag-number">#4324</span></span><span className="grandmaster-color">4312</span></Col>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><Button variant="none" size="sm" className="leave-scrim-btn" style={{padding: "0", backgroundColor: "rgba(186,68,79,0)", width: "42px", borderRadius: "50%"}}><FaSignOutAlt className="fs-1" style={{backgroundColor: "rgba(220,53,69,0)", color: "var(--bs-gray-500)"}}/></Button></Col>
                    </Row>
                    <Row className="scrim-player scrim-left-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={DPS} style={{width: "35px"}}/></Col>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src="assets/img/5.png" style={{height: "50px"}}/></Col>
                        <Col className="col-11 col-md-8 col-lg-8 col-xl-9 col-xxl-9 d-grid me-auto"><span className="text-truncate mt-auto" data-bs-toggle="tooltip" data-bss-tooltip="" title="Nightbot">NAMETOOLONGFORBOX<span className="battle-tag-number">#4324</span></span><span className="grandmaster-color">4312</span></Col>
                    </Row>
                    <Row className="row scrim-empty-role scrim-left-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={DPS} style={{width: "35px"}}/></Col>
                        <Col className="col-9 d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description">Requirement 4.2-4.4K DPS</span></Col>
                    </Row>
                    <Row className="scrim-empty-role scrim-left-team" style={{paddingTop: "8px", paddingBottom: "8px",backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={SUPPORT} style={{width: "35px"}}/></Col>
                        <Col className="col-9 d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description" >Requirement 4.2-4.4K Support</span></Col>
                    </Row>
                    <Row className="scrim-empty-role scrim-left-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={SUPPORT} style={{width: "35px"}}/></Col>
                        <Col className="col-9 d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description" >Requirement 4.2-4.4K Support</span></Col>
                    </Row>
                </Col>
                <Col className="col-4" style={{textAlign: "center"}}>
                    <Carousel id="maps" style={{marginBottom: "1rem"}}>
                        <Carousel.Item className="carousel-item active"><img className="w-100 d-block" src={require("../../assets/images/busan.webp")} alt="Slide Image"/></Carousel.Item>
                        <Carousel.Item className="carousel-item"><img className="w-100 d-block" src={require("../../assets/images/dorado.webp")} alt="Slide Image"/></Carousel.Item>
                        <Carousel.Item className="carousel-item"><img className="w-100 d-block" src={require("../../assets/images/hanamura.webp")} alt="Slide Image"/></Carousel.Item>
                    </Carousel>
                    <div className="d-grid"><span style={{fontSize: "26px"}}>Busan</span><span style={{fontSize: "26px"}}>Hanamura</span><span style={{fontSize: "26px"}}>Doraro</span></div>
                </Col>
                <Col className="col-4" style={{backgroundColor: "rgba(255,255,255,0)"}}>
                    <Row className="scrim-right-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingRight: "6px", paddingLeft: "6px"}}>
                        <Col className="col-7 col-md-8 col-lg-8 col-xl-9 col-xxl-9 d-flex flex-column me-auto justify-content-lg-center" style={{textAlign: "right"}}><span className="text-truncate" >Nametoolongforbox<span className="battle-tag-number">#4324</span></span><span className="grandmaster-color" >4312</span></Col>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src="assets/img/6.png" style={{height: "50px"}}/></Col>
                        <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={TANK} style={{width: "35px"}}/></Col>
                    </Row>
                    <Row className="scrim-right-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center" style={{transform: "rotate(180deg)"}}><Button variant="none" size="sm" className="leave-scrim-btn" style={{padding: "0", backgroundColor: "rgba(186,68,79,0)", width: "42px", borderRadius: "50%"}}><FaSignOutAlt className="fs-1" style={{backgroundColor: "rgba(220,53,69,0)", color: "var(--bs-gray-500)"}}/></Button></Col>
                        <Col className="col-7 col-md-6 col-lg-6 col-xl-7 col-xxl-7 d-flex flex-column me-auto justify-content-lg-center" style={{textAlign: "right"}}><span className="text-truncate" >Nametoolongforbox<span className="battle-tag-number">#4324</span></span><span className="grandmaster-color" >4312</span></Col>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src="assets/img/2.png" style={{height: "50px"}}/></Col>
                        <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={TANK} style={{width: "35px"}}/></Col>
                    </Row>
                    <Row className="scrim-right-team scrim-player" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                    <Col className="col-7 col-md-8 col-lg-8 col-xl-9 col-xxl-9 d-flex flex-column me-auto justify-content-lg-center" style={{textAlign: "right"}}><span className="text-truncate" >Nametoolongforbox<span className="battle-tag-number">#4324</span></span><span className="grandmaster-color" >4312</span></Col>
                        <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src="assets/img/4.png" style={{height: "50px"}}/></Col>
                        <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={DPS} style={{width: "35px"}}/></Col>
                    </Row>
                    <Row className="scrim-empty-role scrim-right-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-11 col-md-10 col-lg-11 col-xl-11 col-xxl-11 d-grid me-auto" style={{textAlign: "right"}}><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description" >Requirement 4.2-4.4K DPS</span></Col>
                        <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={DPS} style={{width: "35px"}}/></Col>
                    </Row>
                    <Row className="scrim-empty-role scrim-right-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-11 col-md-10 col-lg-11 col-xl-11 col-xxl-11 text-end d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description" >Requirement 4.2-4.4K Support</span></Col>
                        <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={SUPPORT} style={{width: "35px"}}/></Col>
                    </Row>
                    <Row className="scrim-empty-role scrim-right-team" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                        <Col className="col-11 col-md-10 col-lg-11 col-xl-11 col-xxl-11 text-end d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description" >Requirement 4.2-4.4K Support</span></Col>
                        <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={SUPPORT} style={{width: "35px"}}/></Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{fontSize: "100px"}}>
                <Col className="col-4 d-xl-flex justify-content-xl-start align-items-xl-center"><span class="fw-light" style={{fontSize: "20px", textDecoration: "underline", color: "rgb(191,191,191)"}}>Back to list</span></Col>
                <Col className="col-4 d-xl-flex justify-content-xl-center"><span style={{fontSize:"80px"}}>#532JA4 </span></Col>
            </Row>
        </>
    )
}

export default Scrim;