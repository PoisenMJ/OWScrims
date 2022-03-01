async function createScrim(username, token, jsonData){
    var res = await fetch("/scrims/create", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...jsonData,
            user: username,
            token
        })
    });
    var json = await res.json();
    return json;
}

async function getScrim(scrimID){
    var res = await fetch(`/scrims/scrim/${scrimID}`);
    var json = await res.json();
    return json;
}

async function getAllScrims(){
    var res = await fetch("/scrims/all");
    var json = await res.json();
    return json;
}

export { createScrim, getScrim, getAllScrims };