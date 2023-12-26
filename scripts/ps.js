if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.HasSubscriptions = true;
    obj.HasCorporateSubscription = true;
    
    $done({body: JSON.stringify(obj)});
}

$done({});