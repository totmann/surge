if ($response.body) {
    let obj = JSON.parse($response.body);
    if (!obj.premium) {
        obj.premium = true;
    }
    else if (obj.locked) {
        obj.locked = false;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});