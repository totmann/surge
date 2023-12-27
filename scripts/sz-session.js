if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.subscriptionInformation = {
        "state": "ACTIVE",
        "end": "2999-12-31",
        "subscriptionType": "SZ_DIGITAL_PACKAGE_L",
        "subscriptionName": "Komplett"
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});