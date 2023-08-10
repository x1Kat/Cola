/*************************************

项目名称：Goodnotes6
下载地址：https://t.cn/A6K6ZSZS
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/kath/Rewrite/main/goodnotes6.js
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/kath/Rewrite/main/goodnotes6.js

[mitm]
hostname = isi.csan.goodnotes.com

*************************************/


const kath = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const namea = "apple_access";
const nameb = "crossplatform_access";
const jsid = "com.goodnotes.gn6_one_time_unlock_3999";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  kath.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  data = {
 "Author": "kath",
 "Telegram" : "https://t.me/kath",
 "warning": "仅供学习，禁止转载或售卖",
 "purchase_date": "2022-09-09T09:09:09Z"
 };
  chxm1024.subscriber.subscriptions[(jsid)] = {
 "Author": "kath",
 "Telegram" : "https://t.me/kath",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  chxm1024.subscriber.entitlements[(namea)] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[(nameb)] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[(namea)].product_identifier = (jsid);
    chxm1024.subscriber.entitlements[(nameb)].product_identifier = (jsid);
  kath.body = JSON.stringify(chxm1024);
}

$done(kath);
