if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.subscriptionInformation = {
        "state": "ACTIVE",
        "end": "2999-12-31"
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});