let modified = $response.body;
if (modified['data']['login']) {
    modified['data']['login']['user']['subscriptionAccessStatus'] = true;
}
else if (modified['data']['viewer']) {
    modified['data']['viewer']['subscriptionAccessStatus'] = true;
}

$done({body: JSON.stringify(modified)});