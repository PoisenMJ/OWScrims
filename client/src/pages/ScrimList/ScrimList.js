import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, FormCheck, ListGroup, Row } from 'react-bootstrap';
import Diamond from '../../assets/images/diamond.png';
import Support from '../../assets/images/support-dark.png';
import Dps from '../../assets/images/damage-dark.png';
import Tank from '../../assets/images/tank-dark.png';
import { getAllScrims } from '../../controllers/scrim';

const ScrimList = () => {
    const [scrims, setScrims] = useState([]);

    useEffect(() => {
        var fetchScrims = async () => {
            var res = await getAllScrims();
            console.log(res.scrims);
            setScrims(res.scrims);
        }
        fetchScrims();
    }, [])

    return (
        <>
            <Row style={{paddingTop: "6px", paddingBottom: "4px"}}>
                <Col className="d-xl-flex justify-content-xl-start align-items-xl-center" style={{paddingTop: "4px", paddingBottom: "4px"}}>
                    <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning">RANK</Dropdown.Toggle>
                                <Dropdown.Menu style={{paddingRight: "8px", paddingLeft: "8px"}}>
                                    <FormCheck type="switch" label="GM"/>
                                    <FormCheck type="switch" label="MASTER"/>
                                    <FormCheck type="switch" label="DIAMOND"/>
                                    <FormCheck type="switch" label="PLAT"/>
                                    <FormCheck type="switch" label="GOLD"/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="danger">MAPS</Dropdown.Toggle>
                                <Dropdown.Menu style={{paddingRight: "8px", paddingLeft: "8px", width: "350px"}}>
                                    <Row>
                                        <Col>
                                            <FormCheck type="switch" label="Blizzard World"/>
                                            <FormCheck type="switch" label="Busan"/>
                                            <FormCheck type="switch" label="Dorado"/>
                                            <FormCheck type="switch" label="Eichenwalde"/>
                                            <FormCheck type="switch" label="Gibraltar"/>
                                            <FormCheck type="switch" label="Hanamura"/>
                                            <FormCheck type="switch" label="Havana"/>
                                            <FormCheck type="switch" label="Hollywood"/>
                                            <FormCheck type="switch" label="Illios"/>
                                            <FormCheck type="switch" label="Junkertown"/>
                                        </Col>
                                        <Col>
                                            <FormCheck type="switch" label="King's Row"/>
                                            <FormCheck type="switch" label="Lijiang Tower"/>
                                            <FormCheck type="switch" label="Nepal"/>
                                            <FormCheck type="switch" label="Numbani"/>
                                            <FormCheck type="switch" label="Oasis"/>
                                            <FormCheck type="switch" label="Rialto"/>
                                            <FormCheck type="switch" label="Route 66"/>
                                            <FormCheck type="switch" label="Anubis"/>
                                            <FormCheck type="switch" label="Volskaya"/>
                                            
                                        </Col>
                                    </Row>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="info">BEST OF</Dropdown.Toggle>
                                <Dropdown.Menu style={{paddingRight: "8px", paddingLeft: "8px"}}>
                                    <FormCheck type="switch" label="BEST OF 1"/>
                                    <FormCheck type="switch" label="BEST OF 3"/>
                                    <FormCheck type="switch" label="BEST OF 5"/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Col className="d-lg-flex justify-content-lg-end align-items-lg-center">
                        <Button variant="secondary" size="sm" style={{marginRight: "5px"}}>Join</Button>
                        <input type="text" placeholder="Private code..."/>
                    </Col>
                    <Col className="col-auto d-xl-flex ms-auto justify-content-xl-center align-items-xl-center" style={{padding: "5px 20px 5px 20px"}}>
                        <Button variant="success" className="d-xl-flex" style={{borderRadius: ".2rem"}}>CREATE</Button>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className="diamond-scrim" style={{margin: "0 0 10px 0", borderRadius: ".3rem"}}>
                            <div className="d-flex">
                                <Row className="row-cols-5" style={{width: "100%"}}>
                                    <Col className="col-auto d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center justify-content-md-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center align-items-xxl-center">
                                        <img className="d-xl-flex" src={Diamond} style={{height: "35px", width: "35px"}}/>
                                    </Col>
                                    <Col className="col-auto d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                        <small className="d-xl-flex align-items-xl-center" style={{color: "var(--bs-body-bg)", fontSize: "20px", margin: "0 0 0 5px"}}>3.2 - 3.6</small>
                                    </Col>
                                    <Col className="col-auto d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center align-items-xxl-center" style={{color: "rgb(174,153,194)"}}>
                                        <span className="d-xl-flex align-items-xl-center" style={{color: "#d2c6dd", fontSize: "20px"}}>BO3</span>
                                    </Col>
                                    <Col className="col-3 col-md-3 d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center align-items-xxl-center">
                                        <span className="text-truncate text-break text-start diamond-scrim-maps" style={{fontSize: "20px"}}>Illios, Hollywood, Busan</span>
                                    </Col>
                                    <Col className="col-auto align-items-center ms-auto align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center align-items-xxl-center" style={{backgroundColor: "#ffffff22", padding: "5px 10px"}}>
                                        <Row className="row g-0 d-xl-flex justify-content-center justify-content-xl-center" style={{backgroundColor: "rgba(255,255,255,0)"}}>
                                            <Col className="col-auto"><img className="role-queue-icon" src={Tank} style={{height: "45px"}}/></Col>
                                            <Col className="col-auto"><img className="role-queue-icon role-full" src={Dps} style={{height: "45px", backgroundColor: "rgba(0,0,0,0)"}}/></Col>
                                            <Col className="col-auto"><img className="role-queue-icon role-full" src={Support} style={{height: "45px"}}/></Col>
                                        </Row>
                                    </Col>
                                    <Col className="col-2 d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center align-items-xxl-center"><small className="d-xl-flex align-items-xl-center" style={{color: "var(--bs-body-bg)", fontSize: "20px", margin: "0 0 0 5px"}}>9 / 12</small></Col>
                                </Row>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ScrimList;