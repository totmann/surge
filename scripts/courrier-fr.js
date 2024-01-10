if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.id) {
        obj.premium = true;
        obj.order_date = "20240109",
        obj.begin_date = "20240109",
        obj.expiry_date = "20240109",
        obj.subscription_source = "web",
        obj.is_beneficiary = true;
        obj.webview_infos.premium = true;
        obj.webview_infos.order_date = "20240109",
        obj.webview_infos.begin_date = "20240109",
        obj.webview_infos.expiry_date = "20240109",
        obj.webview_infos.subscription_source = "web",
        obj.webview_infos.is_beneficiary = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});