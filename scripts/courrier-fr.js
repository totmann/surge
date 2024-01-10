if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.id) {
        obj.webview_infos.premium = true;
        obj.premium = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});