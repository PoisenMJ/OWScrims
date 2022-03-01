import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, FormCheck, ListGroup, Row } from 'react-bootstrap';

// ROLE IMAGES
import Support from '../../assets/images/support-dark.png';
import Dps from '../../assets/images/damage-dark.png';
import Tank from '../../assets/images/tank-dark.png';

import { getAllScrims } from '../../controllers/scrim';
import { srToRank, roundedToFixed, checkRoleSlotsLeft, rangeToRank } from '../../util/overwatchUtil';
import { useNavigate } from 'react-router';

const ScrimList = () => {
    let navigate = useNavigate();
    const [scrims, setScrims] = useState([]);
    const [filteredScrims, setFilteredScrims] = useState([]);
    const [filters, setFilters] = useState({
        rank: [],
        maps: [],
        bestOf: []
    });

    useEffect(() => {
        var fetchScrims = async () => {
            var res = await getAllScrims();
            setScrims(res.scrims);
            setFilteredScrims(res.scrims);
        }
        fetchScrims();
    }, [])
    
    const filterListByMap = (event, map) => {
        // IF IN FILTER REMOVE IT
        if(filters.maps.includes(map)){
            var newMapsFilter = filters.maps.filter(e => e !== map);
            setFilters({...filters, maps: newMapsFilter});
        } else {
            filters.maps.push(map);
            setFilters({...filters});
        }
    }
    const filterListByRank = (event, rank) => {
        // IF IN FILTER REMOVE IT
        if(filters.rank.includes(rank)){
            var newRankFilter = filters.rank.filter(e => e !== rank);
            setFilters({...filters, rank: newRankFilter});
        } else {
            filters.rank.push(rank);
            setFilters({...filters});
        }
    }
    const filterListByBestOf = (event, bestOf) => {
        // IF IN FILTER REMOVE IT
        if(filters.bestOf.includes(bestOf)){
            var newBestOfFilter = filters.bestOf.filter(e => e !== bestOf);
            setFilters({...filters, bestOf: newBestOfFilter});
        } else {
            filters.bestOf.push(bestOf);
            setFilters({...filters});
        }
    }

    useEffect(() => {
        var filtered = scrims.filter(scrim => {
            if(filters.rank.length > 0){
                // IF NO RANKS IN RANGE RETURN FALSE
                var ranks = rangeToRank(scrim.sr_lower, scrim.sr_higher);
                if(! (filters.rank.some( rank => ranks.includes(rank) ))) return false
            }
            if(filters.maps.length > 0){
                if(! (filters.maps.some( map => scrim.maps.includes(map)))) return false;
            }
            if(filters.bestOf.length > 0){
                if(! (filters.bestOf.some( bestOf => scrim.best_of.includes(bestOf)))) return false;
            }
            return true;
        })
        setFilteredScrims(filtered);
    }, [filters])

    const navigateToCreateScrim = () => {
        navigate("/create-scrim")
    }

    return (
        <>
            <Row style={{paddingTop: "6px", paddingBottom: "4px"}}>
                <Col className="d-xl-flex justify-content-xl-start align-items-xl-center" style={{paddingTop: "4px", paddingBottom: "4px"}}>
                    <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning">RANK</Dropdown.Toggle>
                                <Dropdown.Menu style={{paddingRight: "8px", paddingLeft: "8px"}}>
                                    <FormCheck type="switch" onClick={(event) => filterListByRank(event, "grandmaster")} label="GM"/>
                                    <FormCheck type="switch" onClick={(event) => filterListByRank(event, "master")} label="MASTER"/>
                                    <FormCheck type="switch" onClick={(event) => filterListByRank(event, "diamond")} label="DIAMOND"/>
                                    <FormCheck type="switch" onClick={(event) => filterListByRank(event, "platinum")} label="PLAT"/>
                                    <FormCheck type="switch" onClick={(event) => filterListByRank(event, "gold")} label="GOLD"/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="danger">MAPS</Dropdown.Toggle>
                                <Dropdown.Menu style={{paddingRight: "8px", paddingLeft: "8px", width: "350px"}}>
                                    <Row>
                                        <Col>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "blizzard-world")} label="Blizzard World"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "busan")} label="Busan"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "dorado")} label="Dorado"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "eichenwalde")} label="Eichenwalde"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "gibraltar")} label="Gibraltar"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "hanamura")} label="Hanamura"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "havana")} label="Havana"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "hollywood")} label="Hollywood"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "ilios")} label="Ilios"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "junkertown")} label="Junkertown"/>
                                        </Col>
                                        <Col>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "kings-row")} label="King's Row"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "lijiang")} label="Lijiang Tower"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "nepal")} label="Nepal"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "numbani")} label="Numbani"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "oasis")} label="Oasis"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "rialto")} label="Rialto"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "route-66")} label="Route 66"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "anubis")} label="Anubis"/>
                                            <FormCheck type="switch" onClick={(event) => filterListByMap(event, "volskaya")} label="Volskaya"/>
                                            
                                        </Col>
                                    </Row>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="info">BEST OF</Dropdown.Toggle>
                                <Dropdown.Menu style={{paddingRight: "8px", paddingLeft: "8px"}}>
                                    <FormCheck type="switch" onClick={(event) => filterListByBestOf(event, "BO1")} label="BEST OF 1"/>
                                    <FormCheck type="switch" onClick={(event) => filterListByBestOf(event, "BO3")} label="BEST OF 3"/>
                                    <FormCheck type="switch" onClick={(event) => filterListByBestOf(event, "BO5")} label="BEST OF 5"/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Col className="d-lg-flex justify-content-lg-end align-items-lg-center">
                        <Button variant="secondary" size="sm" style={{marginRight: "5px"}}>Join</Button>
                        <input type="text" placeholder="Private code..."/>
                    </Col>
                    <Col className="col-auto d-xl-flex ms-auto justify-content-xl-center align-items-xl-center" style={{padding: "5px 20px 5px 20px"}}>
                        <Button variant="success" className="d-xl-flex" style={{borderRadius: ".2rem"}} onClick={navigateToCreateScrim}>CREATE</Button>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {filteredScrims.length > 0 ? filteredScrims.map((scrim, index) => {
                            var averageSR = Math.round((parseInt(scrim.sr_lower) + parseInt(scrim.sr_higher)) / 2);
                            var slotsLeft = checkRoleSlotsLeft(scrim.team_1, scrim.team_2);
                            return (
                                <ListGroup.Item className={srToRank(averageSR)+"-scrim"} style={{margin: "0 0 10px 0", borderRadius: ".3rem"}} key={index}>
                                    <div className="d-flex">
                                        <Row className="row-cols-5" style={{width: "100%"}}>
                                            <Col className="col-auto d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center justify-content-md-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center align-items-xxl-center">
                                                <img className="d-xl-flex" src={require(`../../assets/images/${srToRank(averageSR)}.png`)} style={{height: "35px", width: "35px"}}/>
                                            </Col>
                                            <Col className="col-auto d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                                <small className="d-xl-flex align-items-xl-center" style={{color: "var(--bs-body-bg)", fontSize: "20px", margin: "0 0 0 5px"}}>{roundedToFixed(scrim.sr_lower/1000)} - {roundedToFixed(scrim.sr_higher/1000)}</small>
                                            </Col>
                                            <Col className="col-auto d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center align-items-xxl-center" style={{color: "rgb(174,153,194)"}}>
                                                <span className="d-xl-flex align-items-xl-center" style={{color: "#d2c6dd", fontSize: "20px"}}>{scrim.best_of}</span>
                                            </Col>
                                            <Col className="col-3 col-md-3 d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center align-items-xxl-center">
                                                <span className="text-truncate text-break text-start diamond-scrim-maps text-capitalize" style={{fontSize: "20px"}}>{scrim.maps.join(', ')}</span>
                                            </Col>
                                            <Col className="col-auto align-items-center ms-auto align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center align-items-xxl-center" style={{backgroundColor: "#ffffff22", padding: "5px 10px"}}>
                                                <Row className="row g-0 d-xl-flex justify-content-center justify-content-xl-center" style={{backgroundColor: "rgba(255,255,255,0)"}}>
                                                    <Col className="col-auto"><img className={"role-queue-icon"+(slotsLeft.tank?"":" role-full")} src={Tank} style={{height: "45px"}}/></Col>
                                                    <Col className="col-auto"><img className={"role-queue-icon"+(slotsLeft.dps?"":" role-full")} src={Dps} style={{height: "45px", backgroundColor: "rgba(0,0,0,0)"}}/></Col>
                                                    <Col className="col-auto"><img className={"role-queue-icon"+(slotsLeft.support?"":" role-full")} src={Support} style={{height: "45px"}}/></Col>
                                                </Row>
                                            </Col>
                                            <Col className="col-2 d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center align-items-xxl-center"><small className="d-xl-flex align-items-xl-center" style={{color: "var(--bs-body-bg)", fontSize: "20px", margin: "0 0 0 5px"}}>{scrim.player_count} / 12</small></Col>
                                        </Row>
                                    </div>
                                </ListGroup.Item>

                            )
                        }) : <span className="text-center fs-3">None available</span>}
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ScrimList;