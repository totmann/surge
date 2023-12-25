if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data.me.username) {
        obj.data.me.activeMembership = true;
    }
    else if (obj.data.meGuidance) {
        obj.data.meGuidance.activeMembership = true;
    }
    
    $done({body: JSON.stringify(obj)});
}