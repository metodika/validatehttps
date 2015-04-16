<?php


	//$originUrl = 'http://www.metodika.com';

	//To allow with or without www

	$originUrl = $_SERVER['HTTP_ORIGIN'];

if ($originUrl == "http://www.metodika.com" || $originUrl == "http://metodika.com")
{
    header("Access-Control-Allow-Origin: $originUrl");
}

	header('Content-Type: application/json; charset=UTF-8');

	//header('Access-Control-Allow-Origin: ' . $originUrl);

	header('Access-Control-Allow-Headers: content-type, *');

if($_SERVER['HTTPS']=='on'){
	echo '{"safe":"true"}';
}else{
	echo '{"safe":"false"}';
}
