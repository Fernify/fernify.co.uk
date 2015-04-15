<?php 
    $to = "contact@fernify.co.uk";
    $from = stripcslashes($_REQUEST['e']);
    $name = stripcslashes($_REQUEST['n']);
    $subject = "An email has been sent by ".$name;
    $message = stripcslashes($_REQUEST['m']);
    mail($to,$subject,$message,"");
?>