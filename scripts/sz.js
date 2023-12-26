if ($response.body) {
    let obj = JSON.parse($response.body);
    for (i in obj){
        obj[i].subscribed = true
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});