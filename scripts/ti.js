if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.user) {
        obj.user.access_level = 2;
        obj.user.can_actually_comment = true;
        obj.user.company_name = "ByteDance";
        obj.user.is_corp_or_group_subscriber = true;
        obj.user.is_free_edition_user = false;
        obj.user.permitted_to_comment = true;
        obj.user.subscription.is_active = true;
        obj.user.subscription.is_pro = true;
    }
    
    $done({body: JSON.stringify(obj)});
}

$done({});