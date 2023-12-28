if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.data.Subscription.bnrtxt = "";
    obj.data.Subscription.btntxt = "";
    obj.data.Subscription.message = "";
    obj.data.Subscription.hasPremiumPlusAccess = true;
    obj.data.Subscription.subscription = "paid";
    obj.data.Subscription.subscriptionType = "paid";
    obj.data.Subscription.renewdate = "2047-08-07T00:00:00+09:00";
    obj.data.Subscription.status = "active";
    obj.data.Subscription.pplus_begin_date = "2022-08-07T00:00:00+09:00";
    
    $done({body: JSON.stringify(obj)});
}

$done({});