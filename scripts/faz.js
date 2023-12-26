if ($response.body) {
    let obj = JSON.parse($response.body);
    obj[0].abos = ["plenigoAbo", "purAccess", "digitecAccess", "einspruchAccess", "fplusMultiuserAbo", "werbefrei", "FAS-EPAP", "FAZ-ARCHIV", "FAZ-EPAP", "FAQ-DIGITAL"]
    
    $done({body: JSON.stringify(obj)});
}

$done({});