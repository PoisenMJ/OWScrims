import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BNET_REDIRECT_URI, BNET_CLIENT_ID, BNET_CLIENT_SECRET } from '../config';
import { AuthContext } from './Auth';
import { login } from '../controllers/auth';
import { getPlayerInfo } from '../controllers/overwatch';

const BNET_AUTH = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const { setToken, setBattletag } = useContext(AuthContext);

    useEffect(() => {
        var urlQueryString = new URLSearchParams(location.search);
        var code = urlQueryString.get('code');
        var url = "https://eu.battle.net/oauth/token";

        const basicAuth = btoa(`${BNET_CLIENT_ID}:${BNET_CLIENT_SECRET}`);
        const headers = {
            'authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        const params = new URLSearchParams();
        params.append('redirect_uri', BNET_REDIRECT_URI);
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        
        fetch(url, {
            method: "POST",
            headers: headers,
            body: params
        }).then(raw => raw.json()).then(response => {
            const fetchPlayerInfo = async () => {
                var data = await login(response.access_token);
                var battletag = data.battletag;
                setToken(data.token);
                setBattletag(battletag);

                var data = await getPlayerInfo(battletag);
                navigate("/profile");
                // ! flash if profile private
            }
            fetchPlayerInfo();

            navigate("/");
        }).catch(err => { console.log(err)})
    }, [])

    return (<div></div>)
}

export default BNET_AUTH;