async function getProfile(user, token){
    var res = await fetch("/users/profile", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user,
            token
        })
    });
    var json = await res.json();
    return json;
}

async function updateSR(user, token, data){
    var res = await fetch("/users/update", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user,
            token,
            data
        })
    });
    var json = await res.json();
    return json;
}

export { getProfile, updateSR };