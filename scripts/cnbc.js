if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.email) {
        obj.app_access = ["InvestingClub", "pro"];
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});