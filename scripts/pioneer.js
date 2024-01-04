if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data && obj.data.user) {
        obj.data.user.hasAccess = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});