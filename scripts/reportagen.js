if ($response.body) {
    let obj = JSON.parse($response.body);
    if (typeof obj.data.login !== 'undefined') {
        obj.data.login.user.subscriptionAccessStatus = true;
    }
    else if (typeof obj.data.viewer !== 'undefined') {
        obj.data.viewer.subscriptionAccessStatus = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});