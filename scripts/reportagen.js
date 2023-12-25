if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data && obj.data.login && obj.data.login.user) {
        obj.data.login.user.subscriptionAccessStatus = true;
    }
    else if (obj.data && obj.data.viewer) {
        obj.data.viewer.subscriptionAccessStatus = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});