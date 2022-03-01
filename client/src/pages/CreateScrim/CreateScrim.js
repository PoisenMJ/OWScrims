import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Row, Col, Button, FormSelect } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { createScrim } from '../../controllers/scrim';
import { AuthContext } from '../../services/Auth';

const formTypes = {
    MINSR: "minSR",
    MAXSR: "maxSR",
    PUBLIC: "public",
    MAPS: "maps",
    BO: "bestOf",
    REGION: "region"
}

const initialState = {
    minSR: 2000,
    maxSR: 5000,
    public: true,
    bestOf: 1,
    region: "NA (EAST)"
};

const reducer = (state, action) => {
    switch (action.type){
        case formTypes.MINSR:
            return {...state, minSR: action.value};
        case formTypes.MAXSR:
            return {...state, maxSR: action.value};
        case formTypes.PUBLIC:
            return {...state, public: action.value};
        case formTypes.BO:
            return {...state, bestOf: action.value};
        case formTypes.REGION:
            return {...state, region: action.value};
    }
}

const CreateScrim = () => {
    let navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    var inputUpdate = (type, value) => dispatch({ type: type, value: value})

    const { battletag, token } = useContext(AuthContext);
    
    const [maps, setMaps] = useState([]);
    const updateMaps = (value) => {
        // IF MAP SELECTED ALREADY
        // REMOVE MAP FROM ARRAY
        if(maps.includes(value)){
            var newArray = maps.filter(e => e !== value);
            setMaps(newArray);
        } else {
            maps.push(value);
            setMaps([...maps]);
        }
    }

    const mapPickedClass = (map) => {
        var mapPicked = maps.includes(map);
        return mapPicked ? " picked" : "";
    }
    
    // WHEN MAPS CHANGE
    // UPDATE BO
    useEffect(() => {
        if(maps.length === 1) inputUpdate(formTypes.BO, 1);
        else if(maps.length === 3) inputUpdate(formTypes.BO, 3);
        else if(maps.length === 5) inputUpdate(formTypes.BO, 5);
        else inputUpdate(formTypes.BO, 0);
    }, [maps])

    const sendCreateScrim = async event => {
        var jsonData = {
            minSR: state.minSR,
            maxSR: state.maxSR,
            public: state.public,
            bestOf: state.bestOf,
            region: state.region,
            maps: maps
        }
        var response = await createScrim(battletag, token, jsonData);
        if(response.success){
            // flash message
            navigate(`/scrims/${response.scrimID}`);
        } else {
            // flash error
        }
    }

    return (
        <>
            <Row className="mx-auto" style={{marginBottom: "12px", width: "55%"}}>
                <Col>
                    <Row>
                        <Col className="col-4 d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                            <div className="d-inline-flex flex-column"><span style={{color: "var(--bs-gray-500)", textAlign: "center"}}>MIN</span>
                                <input type="number" min={2000} max={5000} defaultValue={state.minSR} step={100} onChange={event => inputUpdate(formTypes.MINSR, event.target.value)}/>
                            </div>
                        </Col>
                        <Col className="col-4 text-center mt-auto"><span className="m-auto justify-content-xl-center" style={{fontSize: "50px"}}>SR</span>
                            <div className="form-check form-switch d-lg-flex justify-content-lg-center"><input className="form-check-input" type="checkbox" defaultChecked={state.public} onChange={event => inputUpdate(formTypes.PUBLIC, event.target.checked)}/><label className="form-check-label" htmlFor="formCheck-1" style={{color: "var(--bs-gray-500)", paddingLeft: "5px", paddingTop: "1px"}}>PUBLIC</label></div>
                        </Col>
                        <Col className="col-4 d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                            <div className="d-inline-flex flex-column"><span style={{color: "var(--bs-gray-500)", textAlign: "center"}}>MAX</span>
                                <input type="number" min={2000} max={5000} defaultValue={state.maxSR} step={100} onChange={event => inputUpdate(formTypes.MAXSR, event.target.value)}/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mx-auto" style={{width: "50%"}}>
                <Col>
                    <Row className="g-0">
                        <Row className="g-0">
                            <Col className="d-lg-flex d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center"><span className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{fontSize: "32px"}}>MAPS</span></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("blizzard-world")} className={"img-fluid create-scrim-image"+mapPickedClass("blizzard-world")} src={require("../../assets/images/blizzard-world.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("busan")} className={"img-fluid create-scrim-image"+mapPickedClass("busan")} src={require("../../assets/images/busan.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("dorado")} className={"img-fluid create-scrim-image"+mapPickedClass("dorado")} src={require("../../assets/images/dorado.webp")}/></Col>
                        </Row>
                        <Row className="g-0">
                            <Col className="col-3">
                                <img onClick={event => updateMaps("eichenwalde")} className={"img-fluid create-scrim-image"+mapPickedClass("eichenwalde")} src={require("../../assets/images/eichenwalde.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("hanamura")} className={"img-fluid create-scrim-image"+mapPickedClass("hanamura")} src={require("../../assets/images/hanamura.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("havana")} className={"img-fluid create-scrim-image"+mapPickedClass("havana")} src={require("../../assets/images/havana.jpg")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("hollywood")} className={"img-fluid create-scrim-image"+mapPickedClass("hollywood")} src={require("../../assets/images/hollywood.webp")}/></Col>
                        </Row>
                        <Row className="g-0">
                            <Col className="col-3">
                                <img onClick={event => updateMaps("ilios")} className={"img-fluid create-scrim-image"+mapPickedClass("ilios")} src={require("../../assets/images/ilios.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("junkertown")} className={"img-fluid create-scrim-image"+mapPickedClass("junkertown")} src={require("../../assets/images/junkertown.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("kings-row")} className={"img-fluid create-scrim-image"+mapPickedClass("kings-row")} src={require("../../assets/images/kings-row.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("lijiang")} className={"img-fluid create-scrim-image"+mapPickedClass("lijiang")} src={require("../../assets/images/lijiang-tower.webp")}/></Col>
                        </Row>
                        <Row className="g-0">
                            <Col className="col-3">
                                <img onClick={event => updateMaps("nepal")} className={"img-fluid create-scrim-image"+mapPickedClass("nepal")} src={require("../../assets/images/nepal.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("numbani")} className={"img-fluid create-scrim-image"+mapPickedClass("numbani")} src={require("../../assets/images/numbani.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("oasis")} className={"img-fluid create-scrim-image"+mapPickedClass("oasis")} src={require("../../assets/images/oasis.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("rialto")} className={"img-fluid create-scrim-image"+mapPickedClass("rialto")} src={require("../../assets/images/rialto.webp")}/></Col>
                        </Row>
                        <Row className="g-0">
                            <Col className="col-3">
                                <img onClick={event => updateMaps("route-66")} className={"img-fluid create-scrim-image"+mapPickedClass("route-66")} src={require("../../assets/images/route-66.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("anubis")} className={"img-fluid create-scrim-image"+mapPickedClass("anubis")} src={require("../../assets/images/temple-of-anubis.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("volskaya")} className={"img-fluid create-scrim-image"+mapPickedClass("volskaya")} src={require("../../assets/images/volskaya-industries.webp")}/></Col>
                            <Col className="col-3">
                                <img onClick={event => updateMaps("gibraltar")} className={"img-fluid create-scrim-image"+mapPickedClass("gibraltar")} src={require("../../assets/images/watchpoint-gibraltar.webp")}/></Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row className="mx-auto" style={{width: "50%", marginTop: "16px"}}>
                <Col className="col-4 mx-auto">
                    <div className={"d-xl-flex justify-content-xl-center align-items-xl-center "+(state.bestOf == 1 && "scrim-best-of-selected")} style={{padding: "14px 20px", backgroundColor: "var(--bs-yellow)"}}><span style={{fontSize: "20px", backgroundColor: "rgba(255,193,7,0)"}}>BEST OF 1</span></div>
                </Col>
                <Col className="col-4 mx-auto">
                    <div className={"d-xl-flex justify-content-xl-center align-items-xl-center "+(state.bestOf == 3 && "scrim-best-of-selected")} style={{padding: "14px 20px", backgroundColor: "var(--bs-pink)"}}><span style={{fontSize: "20px", backgroundColor: "rgba(255,193,7,0)"}}>BEST OF 3</span></div>
                </Col>
                <Col className="col-4 mx-auto">
                    <div className={"d-xl-flex justify-content-xl-center align-items-xl-center "+(state.bestOf == 5 && "scrim-best-of-selected")} style={{padding: "14px 20px", backgroundColor: "var(--bs-purple)"}}><span style={{fontSize: "20px", backgroundColor: "rgba(255,193,7,0)"}}>BEST OF 5</span></div>
                </Col>
            </Row>
            <Row className="mx-auto" style={{width: "50%", marginTop: "16px"}}>
                <Col className="col-12">
                    <FormSelect onChange={event => inputUpdate(formTypes.REGION, event.target.value)}>
                        <option>NA (EAST)</option>
                        <option>NA (WEST)</option>
                        <option>EU</option>
                        <option>ASIA</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row className="mx-auto" style={{width: "50%", marginTop: "16px"}}>
                <Col className="col-12">
                    <Button onClick={sendCreateScrim} size="lg" variant="success" style={{width: "100%"}}>CREATE</Button>
                </Col>
            </Row>
        </>
    )
}

export default CreateScrim;