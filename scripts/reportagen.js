let modified = $response.body;
$modified['data']['login']['user']['subscriptionAccessStatus'] = true;
$done({body: JSON.stringify(modified)});