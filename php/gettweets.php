<?php
session_start();
require_once("twitteroauth.php"); //Path to twitteroauth library
 
//$twitteruser = "Xpressionz_";
//$twitteruser = "octaveyahoo";
$twitteruser= "Xpressionz_";

$notweets = 30;
$consumerkey = "yourkey";
$consumersecret = "yourSecret";
$accesstoken = "yourToken";
$accesstokensecret = "yourTokenSecret";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo $_GET['callback']. '('. json_encode($tweets) .')';
?>
