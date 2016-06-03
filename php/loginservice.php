<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("functions.php");
if(isset($_POST['korisnik']) && isset($_POST['sifra'])){
$korisnik = $_POST['korisnik'];
$sifra = $_POST['sifra'];
echo login($korisnik,$sifra);
}
?>