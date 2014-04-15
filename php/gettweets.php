<?php
session_start();
require_once("twitteroauth.php"); //Path to twitteroauth library
 
//$twitteruser = "Xpressionz_";
$twitteruser = "octaveyahoo";

$notweets = 30;
$consumerkey = "yoG92RFgr934QngSCFD7ZpETs";
$consumersecret = "hdfEu8i3IWmAipzfhRRLdJyLu7jMW3bvEL1dXql5TI72QLS2Sx";
$accesstoken = "312785478-smbzdHHpC44mpBkvex7bgtXwEVnYrjTYF7owWEak";
$accesstokensecret = "dIbmei6oXZV20YciCjpBCFyhOELiZE8bbYHbBDBBOlw1X";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo $_GET['callback']. '('. json_encode($tweets) .')';
?>