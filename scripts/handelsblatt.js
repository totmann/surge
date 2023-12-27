if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.premiumProducts = [5820];
    
    $done({body: JSON.stringify(obj)});
}

$done({});