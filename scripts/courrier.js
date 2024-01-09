if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data) {
        obj.data.useService.courrier.useStatus = 0;
        obj.data.useService.courrier.endDate = "2044-01-09T08:19:22.000Z";
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});