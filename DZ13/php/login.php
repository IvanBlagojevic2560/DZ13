<?php
session_start();
include ("config.php");
global $conn;
if(isset($_POST['login'])){
	$username = mysqli_real_escape_string($conn,$_POST['username']);
	$password = mysqli_real_escape_string($conn,$_POST['password']);
	$select_user = "SELECT * FROM korisnici WHERE username = '$username' AND password = '$password'";
	$run_user = mysqli_query($conn, $select_user);
	$check_user = mysqli_num_rows($run_user);
	if($check_user > 0){
		$_SESSION['username'] = $username;
		header("Location: ../app/mainpage/mainpage.html");
	}else {
		echo "<script>alert('Pokusajte ponovo!')</script>";
		header("Location: ../app/form2/form2.html");
	}
}
?>