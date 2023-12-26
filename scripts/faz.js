if ($response.body) {
    let obj = JSON.parse($response.body);
    obj[0].abos = ["FAS-EPAP", "FAZ-ARCHIV", "FAQ-DIGITAL"]
    
    $done({body: JSON.stringify(obj)});
}

$done({});