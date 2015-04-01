<?php 
if(isset($_POST['submit'])){
    $to = "contact@fernify.co.uk"; // this is your Email address
    $from = stripcslashes($_POST['emailText']);
    $name = stripcslashes($_POST['nameText']);
    $subject = "Form submission";
    $message = stripcslashes($name . " " . $_POST['message']);
    mail($to,$subject,$message,"");
    }
?>