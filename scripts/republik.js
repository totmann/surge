let obj = JSON.parse($response.body);
if (obj.data.me) {
    obj.data.me.activeMembership = true;
}

$done({body: JSON.stringify(obj)});