<?php 
if(isset($_POST['submit'])){
	    $to = "contact@fernify.co.uk"; // this is your Email address
	    $from = stripcslashes($_POST['emailText']);
	    $name = stripcslashes($_POST['nameText']);
	    $subject = "An email has been sent by ".$from;
	    $message = $name." sends the message: ".stripcslashes($_POST['messageText']);
	    mail($to,$subject,$message);
    }
?>