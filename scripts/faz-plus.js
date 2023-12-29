if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.paymentData.purAccess = true;
    obj.paymentData.hasFPlusAbo = true;
    obj.paymentData.message = "";
    obj.paymentData.buttonText = "";
    obj.paymentData.status = "active";
    
    $done({body: JSON.stringify(obj)});
}

$done({});