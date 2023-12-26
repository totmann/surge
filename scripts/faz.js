if ($response.body) {
    let obj = JSON.parse($response.body);
    obj[0].pdfPlaceIds = [2553,1167,1171,2557,1995,1221,2551,2559]
    
    $done({body: JSON.stringify(obj)});
}

$done({});