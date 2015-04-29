<?php 

$to = "contact@fernify.co.uk"; // this is your Email address
$from = stripcslashes($_POST['e']);
$name = stripcslashes($_POST['n']);
$subject = "An email has been sent by ".$from;
$message = $name." sends the message: ".stripcslashes($_POST['m']);
mail($to,$subject,$message);
    
?>