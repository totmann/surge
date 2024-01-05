if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.is_subscriber) {
        obj.is_subscriber = true;
    }
    else if (obj.account) {
        obj.account.is_subscriber = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});