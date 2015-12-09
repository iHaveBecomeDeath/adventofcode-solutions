var CryptoJS = require("crypto-js/crypto-js");
var input = 'bgvyzdsv'; 
var md5 = function(str){
	return CryptoJS.MD5(str).toString();
}
var done = false;
var number = 0;
var md5String = '';

while(!done){
	md5String = md5(input + number);
	if (md5String.substring(0,4) === '0000'){
		console.log('0000', md5String, number);
	}
	if (md5String.substr(0,5) === '00000'){
		done = true;
		console.log('done!');
	}
	// console.log(md5String, done, number, input);	
	number++;
}
	console.log(md5String, done, number-1, input);	
