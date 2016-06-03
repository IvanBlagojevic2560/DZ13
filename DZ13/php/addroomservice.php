<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config1.php");
if(isset($_POST['ime']) && isset($_POST['TV']) && isset($_POST['kreveti'])){
$ime= $_POST['ime'];
$TV = intval($_POST['TV']);
$kreveti = intval($_POST['kreveti']);
$stmt = $conn->prepare("INSERT INTO sobe (ime, tv, kreveti) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $ime, $TV, $kreveti);
$stmt->execute();
echo "ok";
}
?>