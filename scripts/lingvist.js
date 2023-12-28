if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.subscription.status = "unlimited";
    obj.subscription.expiration_ts = "2047-06-10T07:04:20Z";
    
    $done({body: JSON.stringify(obj)});
}

$done({});