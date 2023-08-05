/*

Revenuecat解锁合集，已解锁APP及下载地址请见说明：https://github.com/kath88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/iKath/Cola/main/Script/Revenuecat.js
//^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/iKath/Cola/main/Script/Revenuecat.js

[MITM]
hostname = api.revenuecat.com

*/
const kath = {};
const kath6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  kath.headers = $request.headers;
} else if (kath6 && kath6.subscriber) {
  kath6.subscriber.subscriptions = kath6.subscriber.subscriptions || {};
  kath6.subscriber.entitlements = kath6.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = 'gd';
  const UAMappings = {
    'VSCO':{ name: 'pro', id: 'vscopro_global_5999_annual_AutoFreeTrial'},
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1'},
    'Photomator':{ name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_yearly_v1'},


    
    
  };
  const data = {
    "expires_date": "7777-07-07T07:07:07Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      kath6.subscriber.subscriptions = {};
      kath6.subscriber.subscriptions[id] = data;
      kath6.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      kath6.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  kath.body = JSON.stringify(kath6);
}
$done(kath);
