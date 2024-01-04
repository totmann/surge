if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.subscriptions) {
        for (i in obj.subscriptions) {
            obj.subscriptions[i].membership_state = "subscribed";
        }
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});