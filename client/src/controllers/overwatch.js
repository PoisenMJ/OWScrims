async function getPlayerInfo(battletag){
    var res = await fetch(`/overwatch/${battletag.replace('#', '-')}`);
    var json = await res.json();
    return json;
}

export { getPlayerInfo };