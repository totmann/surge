if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.premium = true;
    
    $done({body: JSON.stringify(obj)});
}

$done({});