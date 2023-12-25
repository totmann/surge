let obj = JSON.parse($response.body);
if (obj.data.login) {
    obj.data.login.user.subscriptionAccessStatus = true;
}
else if (obj.data.viewer) {
    obj.data.viewer.subscriptionAccessStatus = true;
}

$done({body: JSON.stringify(obj)});