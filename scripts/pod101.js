if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.data.Subscription.hasPremiumPlusAccess = true;
    obj.data.Subscription.subscriptionType = "premium+";
    obj.data.Subscription.subscription = "premium+";
    obj.data.Subscription.renewdate = "2047-08-07T00:00:00+09:00";
    obj.data.Subscription.status = "active";
    obj.data.Subscription.pplus_begin_date = "2022-08-07T00:00:00+09:00";
    
    $done({body: JSON.stringify(obj)});
}

$done({});