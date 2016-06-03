<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['username']) &&
isset($_POST['password'])){
$imre = $_POST['ime'];
$prezime = $_POST['prezime'];
$username = $_POST['username'];
$password = md5($_POST['password']);
$stmt = $conn->prepare("INSERT INTO korisnici (ime, prezime, username, password) VALUES (?,
?, ?, ?)");
$stmt->bind_param("ssss", $imre, $prezime, $username, $password);
$stmt->execute();
echo "ok";
}
?>