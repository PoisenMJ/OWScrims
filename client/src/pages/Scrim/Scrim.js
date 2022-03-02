import React, { useContext, useEffect, useState } from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

// IMAGE IMPORTS (COULD FIND A BETTER WAY FOR THIS)
import TANK from "../../assets/images/tank.png";
import DPS from "../../assets/images/damage.png";
import SUPPORT from "../../assets/images/support.png";

// IMPORT ICONS
import { FaSignOutAlt } from 'react-icons/fa';
import { getScrim } from '../../controllers/scrim';
import { AuthContext } from '../../services/Auth';

import { srToRank, roundedToFixed } from '../../util/overwatchUtil';
import { Flash } from '../../components/Flash';

const teamArray = ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6'];

const Scrim = () => {
    const { scrim_id } = useParams();
    const { battletag } = useContext(AuthContext);

    const [scrimData, setScrimData] = useState({
        minSR: 2.0,
        maxSR: 5.0,
        region: "EU",
        team1: { slot1: null, slot2: null, slot3: null, slot4: null, slot5: null, slot6: null },
        team2: { slot1: null, slot2: null, slot3: null, slot4: null, slot5: null, slot6: null },
        bestOf: 1,
        playerCount: 0,
        maps: []
    });

    useEffect(() => {
        Flash("HELLO", "dark");
        const fetchScrim = async () => {
            var data = await getScrim(scrim_id);
            console.log(data);
            if(data.success){
                setScrimData({
                    minSR: data.scrim.sr_lower,
                    maxSR: data.scrim.sr_higher,
                    region: data.scrim.region,
                    team1: data.scrim.team_1,
                    team2: data.scrim.team_2,
                    bestOf: data.scrim.best_of,
                    playerCount: data.scrim.player_count,
                    maps: data.scrim.maps
                })
            }
        }
        fetchScrim();
    }, [])

    const emptyRoleLeft = (roleImage, indexKey) => {
        return (
            <Row className="row scrim-empty-role scrim-left-team scrim" key={indexKey} style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={roleImage} style={{width: "35px"}}/></Col>
                <Col className="col-9 d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description">Requirement {roundedToFixed(scrimData.minSR/1000)}-{roundedToFixed(scrimData.maxSR/1000)}K</span></Col>
            </Row>
        )
    }
    const ownRoleLeft = (roleImage, image, battletag, sr) => {
        return (
            <Row className="scrim-left-team scrim" key={battletag} style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={roleImage} style={{width: "35px"}}/></Col>
                <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src={image} style={{height: "50px"}}/></Col>
                <Col className="col-11 col-md-6 col-lg-6 col-xl-7 col-xxl-7 d-grid me-auto"><span className="text-truncate" data-bs-toggle="tooltip" data-bss-tooltip="">{battletag.split('#')[0]}<span className="battle-tag-number">#{battletag.split('#')[1]}</span></span><span className={srToRank(parseInt(sr))+"-color"}>{sr}</span></Col>
                <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><Button variant="none" size="sm" className="leave-scrim-btn" style={{padding: "0", backgroundColor: "rgba(186,68,79,0)", width: "42px", borderRadius: "50%"}}><FaSignOutAlt className="fs-1" style={{backgroundColor: "rgba(220,53,69,0)", color: "var(--bs-gray-500)"}}/></Button></Col>
            </Row>
        )
    }
    const otherRoleLeft = (roleImage, image, battletag, sr) => {
        return (
            <Row className="scrim-left-team scrim" key={battletag} style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingRight: "6px", paddingLeft: "6px"}}>
                <Col className="col-1 col-md-2 col-lg-2 col-xl-1 col-xxl-1 d-md-flex d-xl-flex justify-content-md-end align-items-md-center justify-content-xl-center align-items-xl-center"><img src={roleImage} style={{width: "35px"}}/></Col>
                <Col className="col-2 d-md-flex d-xl-flex me-auto justify-content-md-center align-items-md-center justify-content-xl-center"><img src={image} style={{height: "50px"}}/></Col>
                <Col className="col-11 col-md-8 col-lg-8 col-xl-9 col-xxl-9 d-grid me-auto"><span className="text-truncate mt-auto" data-bs-toggle="tooltip" title="Nightbot">{battletag.split('#')[0]}<span className="battle-tag-number">#{battletag.split('#')[1]}</span></span><span className="grandmaster-color">{sr}</span></Col>
            </Row>
        )
    }


    const emptyRoleRight = (roleImage, indexKey) => {
        return (
            <Row className="scrim-empty-role scrim-right-team scrim" key={indexKey} style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                <Col className="col-11 col-md-10 col-lg-11 col-xl-11 col-xxl-11 text-end d-grid me-auto"><span className="scrim-empty-role-title" >Click to take role</span><span className="scrim-empty-role-description" >Requirement {roundedToFixed(scrimData.minSR/1000)}-{roundedToFixed(scrimData.maxSR/1000)}K</span></Col>
                <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={roleImage} style={{width: "35px"}}/></Col>
            </Row>
        )
    }
    const ownRoleRight = (roleImage, image, battletag, sr) => {
        return (
            <Row className="scrim-right-team scrim" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingLeft: "6px", paddingRight: "6px"}}>
                <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center" style={{transform: "rotate(180deg)"}}><Button variant="none" size="sm" className="leave-scrim-btn" style={{padding: "0", backgroundColor: "rgba(186,68,79,0)", width: "42px", borderRadius: "50%"}}><FaSignOutAlt className="fs-1" style={{backgroundColor: "rgba(220,53,69,0)", color: "var(--bs-gray-500)"}}/></Button></Col>
                <Col className="col-7 col-md-6 col-lg-6 col-xl-7 col-xxl-7 d-flex flex-column me-auto justify-content-lg-center" style={{textAlign: "right"}}><span className="text-truncate" >{battletag.split('#')[0]}<span className="battle-tag-number">#{battletag.split('#')[1]}</span></span><span className={srToRank(parseInt(sr))+"-color"} >{sr}</span></Col>
                <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src={image} style={{height: "50px"}}/></Col>
                <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={roleImage} style={{width: "35px"}}/></Col>
            </Row>
        )
    }
    const otherRoleRight = (roleImage, image, battletag, sr) => {
        return (
            <Row className="scrim-right-team scrim" style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "rgba(255,255,255,0.17)", marginBottom: "10px", paddingRight: "6px", paddingLeft: "6px"}}>
                <Col className="col-7 col-md-8 col-lg-8 col-xl-9 col-xxl-9 d-flex flex-column me-auto justify-content-lg-center" style={{textAlign: "right"}}><span className="text-truncate" >{battletag.split('#')[0]}<span className="battle-tag-number">#{battletag.split('#')[1]}</span></span><span className={srToRank(parseInt(sr))+"-color"} >{sr}</span></Col>
                <Col className="col-2 d-lg-flex d-xl-flex me-auto justify-content-lg-center align-items-lg-center justify-content-xl-center"><img src={image} style={{height: "50px"}}/></Col>
                <Col className="col-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"><img src={roleImage} style={{width: "35px"}}/></Col>
            </Row>
        )
    }

    return (
        <>
            <Row>
                <Col className="d-xl-flex justify-content-evenly align-items-xl-center">
                    <Row>
                        <Col className="col-auto d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center align-items-xl-center">
                            <span style={{fontSize: "40px"}}>{scrimData.region}</span>
                        </Col>
                        <Col className="d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                            <span style={{fontSize: "35px"}}>{scrimData.bestOf}</span>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-xl-flex justify-content-center align-items-xl-center">
                    <h1 className="display-3 text-center d-xl-flex my-auto">{roundedToFixed(scrimData.minSR/1000)}-{roundedToFixed(scrimData.maxSR/1000)}</h1>
                </Col>
                <Col className="d-md-flex d-lg-flex d-xl-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                    <span style={{fontSize: "30px"}}>{scrimData.playerCount} / 12</span>
                </Col>
            </Row>
            <Row>
                <Col className="col-4" style={{backgroundColor: "rgba(255,255,255,0)"}}>
                    {teamArray.map((slot, index) => {
                        var ROLE = (index <= 1) ? TANK : (index <= 3) ? DPS : SUPPORT;
                        return (
                            scrimData.team1[slot] ?
                                ((battletag === scrimData.team1[slot].battletag) ?
                                ownRoleLeft(ROLE, scrimData.team1[slot].image, scrimData.team1[slot].battletag, scrimData.team1[slot].sr) :
                                otherRoleLeft(ROLE, scrimData.team1[slot].image, scrimData.team1[slot].battletag, scrimData.team1[slot].sr))
                            :emptyRoleLeft(ROLE)
                        )
                    })}
                </Col>
                <Col className="col-4" style={{textAlign: "center"}}>
                    <Carousel id="maps" style={{marginBottom: "1rem"}}>
                        {scrimData.maps.map((map, index) => (
                            <Carousel.Item className="carousel-item active"><img className="w-100 d-block" src={require(`../../assets/images/${map}.webp`)} alt="Slide Image"/></Carousel.Item>
                        ))}
                        {/* <Carousel.Item className="carousel-item"><img className="w-100 d-block" src={require("../../assets/images/dorado.webp")} alt="Slide Image"/></Carousel.Item>
                        <Carousel.Item className="carousel-item"><img className="w-100 d-block" src={require("../../assets/images/hanamura.webp")} alt="Slide Image"/></Carousel.Item> */}
                    </Carousel>
                    <div className="d-grid">
                        {scrimData.maps.map((map, index) => (
                            <span style={{fontSize: "26px"}}>{map}</span>
                        ))}
                    </div>
                </Col>
                <Col className="col-4" style={{backgroundColor: "rgba(255,255,255,0)"}}>
                    {teamArray.map((slot, index) => {
                        var ROLE = (index <= 1) ? TANK : (index <= 3) ? DPS : SUPPORT;
                        return (
                            scrimData.team2[slot] ?
                                (battletag === scrimData.team2[slot].battletag) ?
                                ownRoleRight(ROLE, scrimData.team2[slot].image, scrimData.team2[slot].battletag, scrimData.team2[slot].sr) :
                                otherRoleRight(ROLE, scrimData.team2[slot].image, scrimData.team2[slot].battletag, scrimData.team2[slot].sr)
                            :emptyRoleRight(ROLE)
                        )
                    })}
                </Col>
            </Row>
            <Row style={{fontSize: "100px"}}>
                <Col className="col-4 d-xl-flex justify-content-xl-start align-items-xl-center"><span className="fw-light" style={{fontSize: "20px", textDecoration: "underline", color: "rgb(191,191,191)"}}>Back to list</span></Col>
                <Col className="col-4 d-xl-flex justify-content-xl-center"><span style={{fontSize:"80px"}}>#532JA4 </span></Col>
            </Row>
        </>
    )
}

export default Scrim;