import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';

const AuthContext = React.createContext({
    token: null,
    battletag: null,
    setToken: (data) => { },
    setBattletag: (data) => { }
});

const AuthProvider = ({ children }) => {
    const localToken = localStorage.getItem('token') || '';
    const localBattletag = localStorage.getItem('battletag') || '';

    const [token, setToken] = useState(localToken);
    const [battletag, setBattletag] = useState(localBattletag);

    useEffect(() => {
        localStorage.setItem('token', token);
        localStorage.setItem('battletag', battletag);
    }, [token, battletag]);

    return (
        <AuthContext.Provider value={{
            token: token,
            battletag: battletag,
            setToken: setToken,
            setBattletag: setBattletag
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    }
    catch(err) {
        return null;
    }
}
// localStorage.removeItem("token");
// localStorage.removeItem("battletag");
const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("battletag");
}

const AuthVerify = (props) => {
    const {token, battletag,
            setToken, setBattletag } = useContext(AuthContext);
    var location = useLocation();

    useEffect(() => {
        if(token && battletag){
            const decodedJwt = parseJwt(token);
            if(decodedJwt.exp * 1000 < Date.now()) {
                setToken('');
                setBattletag('');
                Logout();
            }
            // IF NOT ABOVE THEN IT'S VALID
        } else {
            setToken('');
            setBattletag('');
            Logout();
        }
    }, [location])

    return <div></div>
}

export { AuthContext, AuthProvider, AuthVerify, Logout };