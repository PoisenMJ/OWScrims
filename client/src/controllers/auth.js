async function login(accessToken){
    var res = await fetch('/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: accessToken })
    });
    var json = await res.json();
    return { battletag: json.battletag, token: json.token }
}

function checkToken(username, token){
    return fetch('/auth/check-token', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: username,
            token: token
        })
    }).then(raw => raw.json()).then(data => {
        if(data.success) return true;
        else return false;
    })
}

export { login, checkToken };