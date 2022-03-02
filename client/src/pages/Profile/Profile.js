import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import TANK from '../../assets/images/tank.png';
import DPS from '../../assets/images/damage.png';
import SUPPORT from '../../assets/images/support.png';
import { getProfile, updateSR } from '../../controllers/user';
import { AuthContext } from '../../services/Auth';

const Profile = () => {
    const { battletag, token } = useContext(AuthContext);
    const [tankSR, setTankSR] = useState(0);
    const [dpsSR, setDpsSR] = useState(0);
    const [supportSR, setSupportSR] = useState(0);
    const [image, setImage] = useState('');

    const updateSRInput = (event, role) => {
        switch (role) {
            case "tank":
                setTankSR(event.target.value);
                break;
            case "dps":
                setDpsSR(event.target.value);
                break;
            case "support":
                setSupportSR(event.target.value);
                break;
        }
    }

    useEffect(() => {
        const fetchProfile = async () => {
            var res = await getProfile(battletag, token);
            if(res.success){
                setTankSR(res.tankSR);
                setDpsSR(res.dpsSR);
                setSupportSR(res.supportSR);
                setImage(res.image);
            }
        }
        fetchProfile();
    }, []);

    const fetchUpdateSR = async () => {
        var d = await updateSR(battletag, token, { tankSR, dpsSR, supportSR });
        if(d.success) console.log('success');
    }

    return (
        <>
            <Row className="d-xl-flex">
                <Col className="d-xl-flex" style={{paddingBottom: "12px"}}>
                    <h1 className="d-flex d-xl-flex justify-content-center align-items-center m-auto">PROFILE</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex d-md-flex d-xl-flex justify-content-center align-items-center justify-content-md-center align-items-md-center justify-content-xl-center align-items-xl-center"><img src={image} style={{width: "250px"}}/></Col>
            </Row>
            <Row>
                <Col className="col-3 text-center d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center mx-auto justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"><span style={{fontSize: "32px", color: "var(--bs-yellow)"}}>NIGHTBOT<span style={{color: "rgb(186,185,183)"}}>#4588</span></span></Col>
            </Row>
            <Row style={{paddingTop: "15px", paddingBottom: "15px"}}>
                <Col className="col-auto mx-auto justify-content-xl-center align-items-xl-center">
                    <Row>
                        <Col className="col-auto d-xl-flex justify-content-xl-center"><img src={TANK} style={{width: "40px"}}/></Col>
                        <Col className="d-xl-flex justify-content-xl-center align-items-xl-center"><input type="number" onChange={event => updateSRInput(event, "tank")} value={tankSR} style={{paddingRight: "8px", paddingLeft: "8px"}}/></Col>
                    </Row>
                    <Row>
                        <Col className="col-auto d-xl-flex justify-content-xl-center"><img src={DPS} style={{width: "40px"}}/></Col>
                        <Col className="d-xl-flex justify-content-xl-center align-items-xl-center"><input type="number" onChange={event => updateSRInput(event, "dps")} value={dpsSR} style={{paddingRight: "8px", paddingLeft: "8px"}}/></Col>
                    </Row>
                    <Row>
                        <Col className="col-auto d-xl-flex justify-content-xl-center"><img src={SUPPORT} style={{width: "40px"}}/></Col>
                        <Col className="d-xl-flex justify-content-xl-center align-items-xl-center"><input type="number" onChange={event => updateSRInput(event, "support")} value={supportSR} style={{paddingRight: "8px", paddingLeft: "8px"}}/></Col>
                    </Row>
                </Col>
            </Row>
            <Row className="g-0">
                <Col className="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 d-xl-flex mx-auto justify-content-xl-center align-items-xl-center">
                    <Button className="block-btn" onClick={fetchUpdateSR} id="save-profile" style={{backgroundColor: "var(--bs-blue)", color: "var(--bs-gray-100)"}}>SAVE</Button>
                </Col>
            </Row>
        </>
    )
}

export default Profile;