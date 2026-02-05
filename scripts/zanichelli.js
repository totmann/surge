if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.is_employee = 1;
    
    $done({body: JSON.stringify(obj)});
}

$done({});