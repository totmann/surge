let body = $response.body;
$body['data']['login']['user']['subscriptionAccessStatus'] = true;
$done({body: JSON.stringify(body)});