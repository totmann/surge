if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data && obj.data.me && obj.data.me.username) {
        obj.data.me.activeMembership = true;
        obj.data.me.roles = ["climate"];
    }
    else if (obj.data && obj.data.meGuidance) {
        obj.data.meGuidance.activeMembership = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});