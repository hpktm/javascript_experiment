
<?php
try{
$dbhost = "localhost";
$dbname = "test";
$dbusername = "root";
$dbpassword = "";

$link = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbusername, $dbpassword);
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>