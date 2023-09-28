/*

小作卡片：https://apps.apple.com/app/id1611559010

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/iKath/Cola/main/Script/xiaozuokapian.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/iKath/Cola/main/Script/xiaozuokapian.js

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
    'card':{ name: 'vip', id: 'card_vip'},
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
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