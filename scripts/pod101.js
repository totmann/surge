if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data) {
        if (obj.data.Subscription) {
            obj.data.Subscription.bnrtxt = "";
            obj.data.Subscription.btntxt = "";
            obj.data.Subscription.message = "";
            obj.data.Subscription.hasPremiumAccess = true;
            obj.data.Subscription.subscriptionType = "premium";
            obj.data.Subscription.subscription = "premium";
            obj.data.Subscription.renewdate = "2047-08-07T00:00:00+09:00";
            obj.data.Subscription.status = "active";
            obj.data.Subscription.pplus_begin_date = "2022-08-07T00:00:00+09:00";
        } 
        else if (obj.data.bnrtxt) {
            obj.data.bnrtxt = "";
            obj.data.btntxt = "";
            obj.data.message = "";
            obj.data.hasPremiumAccess = true;
            obj.data.subscriptionType = "premium";
            obj.data.subscription = "premium";
            obj.data.renewdate = "2047-08-07T00:00:00+09:00";
            obj.data.status = "active";
            obj.data.pplus_begin_date = "2022-08-07T00:00:00+09:00";
        }
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});