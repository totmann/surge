if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.result = "true"
    
    $done({body: JSON.stringify(obj)});
}

$done({});