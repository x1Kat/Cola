/*************************************

项目名称：图图记账
下载地址：https://t.cn/A6JZS4a0
项目名称：WidgetArt-自定义桌面小组件
下载地址：https://t.cn/A6GugI9C
项目名称：Apollo-记录你的影视生活
下载地址：https://t.cn/A6X7TuG8
项目名称：Aphrodite
下载地址：https://t.cn/A6MavcIV
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/kath/Rewrite/main/ttqjt.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const kath = {"request_date_ms":1670916721890,"request_date":"2022-12-13T07:32:01Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-12-13T07:15:45Z","original_application_version":"27","entitlement":{},"other_purchases":{},"management_url":null,"subscriptions":{"com.kath.premium.yearly":{"warning":"仅供学习，禁止转载或售卖","wechat":"kath","purchase_date":"2022-09-09T09:09:09Z","expires_date":"2099-09-09T09:09:09Z","original_purchase_date":"2022-09-09T09:09:09Z","feedback":"kath","ownership_type":"PURCHASED"}},"entitlements":{"all":{"wechat":"kath","ownership_type":"PURCHASED","product_identifier":"com.kath.premium.yearly","feedback":"kath","warning":"仅供学习，禁止转载或售卖","original_purchase_date":"2022-09-09T09:09:09Z","purchase_date":"2022-09-09T09:09:09Z","expires_date":"2099-09-09T09:09:09Z"}},"original_purchase_date":"2022-12-13T07:15:15Z","original_app_user_id":"$RCAnonymousID:7937cc279bfe463c9495003857f22faf","last_seen":"2022-12-13T07:18:05Z"}};

const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('totowallet') != -1) {Body = (kath);}

if (ua.indexOf('widget_art') != -1) {Body = (kath);}

if (ua.indexOf('apollo') != -1) {Body = (kath);}

if (ua.indexOf('Aphrodite') != -1) {Body = (kath);}

$done({body : JSON.stringify(kath)});
