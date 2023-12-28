if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.subscriptionInformation = {
        "state": "ACTIVE",
        "end": "2999-12-31",
        "subscriptionType": "SZ_DIGITAL_ABO",
        "subscriptionName": "Komplett"
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});