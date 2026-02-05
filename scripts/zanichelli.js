if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.id) {
        obj.is_employee = 1;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});