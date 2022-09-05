// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。

var obj = JSON.parse($response.body);
var url = $request.url;
obj.data.gold = '99999.99';

$done({ body: JSON.stringify(obj) });
