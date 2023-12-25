if ($response.body) {
    let obj = JSON.parse($response.body);
    if (typeof obj.data.me.username !== 'undefined') {
        obj.data.me.activeMembership = true;
    }
    else if (typeof obj.data.meGuidance !== 'undefined') {
        obj.data.meGuidance.activeMembership = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});