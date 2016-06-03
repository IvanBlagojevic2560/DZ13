<?php

	include("config.php");

	
function checkIfLoggedIn(){
global $conn;
if(isset($_SERVER['HTTP_TOKEN'])){
$token = $_SERVER['HTTP_TOKEN'];
$result = mysqli_query($conn, "SELECT * FROM korisnici WHERE token='$token'");
$num_rows = mysqli_num_rows($result);
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}
else{
return false;
}
}

function login($username, $password){
global $conn;
$rarray = array();
if(checkLogin($username,$password)){
$id = sha1(uniqid());
$result2 = mysqli_query($conn,"UPDATE korisnici SET token='$id' WHERE
username='$username'");
$rarray['token'] = $id;
} else{
$rarray['error'] = "Invalid username/password";
}
return json_encode($rarray);
}

function checkLogin($username, $password){
global $conn;
$username = mysqli_real_escape_string($conn,$username);
$password = md5(mysqli_real_escape_string($conn,$password));
$result = mysqli_query($conn, "SELECT * FROM korisnici WHERE username='$username'
AND password='$password'");
$num_rows = mysqli_num_rows($result);
if($num_rows > 0)
{
return true;

}
else{
return false;
}
}

function register($username, $password, $firstname, $lastname){
global $conn;
$rarray = array();
$errors = "";
if(checkIfUserExists($username)){
$errors .= "Username already exists\r\n";
}
if(strlen($username) < 5){
$errors .= "Username must have at least 5 characters\r\n";
}
if(strlen($password) < 5){
$errors .= "Password must have at least 5 characters\r\n";
}
if(strlen($firstname) < 3){
$errors .= "First name must have at least 3 characters\r\n";
}
if(strlen($password) < 3){
$errors .= "Last name must have at least 3 characters\r\n";
}
if($errors == ""){
$stmt = $conn->prepare("INSERT INTO korisnici (firstname, lastname, username,
password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $firstname, $lastname, $username, md5($password));
if($stmt->execute()){
$id = sha1(uniqid());
$result2 = mysqli_query($conn,"UPDATE korisnici SET token='$id'
WHERE username='$username'");
$rarray['token'] = $id;
}else{
$rarray['error'] = "Database connection error";
}
} else{
$rarray['error'] = json_encode($errors);
}
return json_encode($rarray);
}

function checkIfUserExists($username){
global $conn;
$result = mysqli_query($conn, "SELECT * FROM korisnici WHERE username='$username'");
$num_rows = mysqli_num_rows($result);
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}	
	
	
function getRooms(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM sobe");
$num_rows = mysqli_num_rows($result);
$rooms = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$one_room = array();
$one_room['id'] = $row['id'];
$one_room['tipSobe'] = $row['tipSobe'];
$one_room['kvadrata'] = $row['kvadrata'];
$one_room['brojKreveta'] = $row['brojKreveta'];
$one_room['pogledNa'] = $row['pogledNa'];
array_push($rooms,$one_room);
}
}
$rarray['rooms'] = $rooms;
return json_encode($rarray);
 
}

?>