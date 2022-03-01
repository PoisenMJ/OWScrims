import React from 'react';
import { Row, Col, Dropdown, Modal, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const History = () => {
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <span className="d-xl-flex justify-content-xl-center" style={{fontSize: "30px"}}>PLAYER HISTORY</span>
                </Col>
            </Row>
            <Row style={{paddingRight: "10px", paddingLeft: "10px"}}>
                <Col>
                    <Row>
                        <Col className="col-3 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex" style={{backgroundColor: "rgba(98,98,98,0.52", paddingTop: "5px", paddingBottom: "5px"}}><img src="assets/img/6.png" style={{width: "45px"}}/>
                            <div className="d-grid" style={{paddingLeft: "8px"}}><span>CrassPass<span style={{color: "var(--bs-gray)"}}>#4234</span></span><span style={{color: "var(--bs-yellow)"}}>SR 4323</span></div>
                            <Dropdown className="dropdown d-sm-flex d-md-flex d-xl-flex ms-auto justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-xl-center align-items-xl-center"><button className="btn btn-warning" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{borderRadius: ".25rem"}}><FaChevronDown/></button>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">REPORT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Modal centered={true} id="modal-1">
                <Modal.Header>
                    <h4 className="modal-title" style="color: var(--bs-body-color);">Reason for report</h4>
                </Modal.Header>
                <Modal.Body><input type="text" style="width: 100%;height: 50px;font-family: Cabin, sans-serif;" placeholder="State your reason." autofocus=""/></Modal.Body>
                <Modal.Footer><Button variant="dark">Close</Button><button className="btn btn-success" type="button">submit</button></Modal.Footer>
            </Modal>
        </>
    )
}

export default History;