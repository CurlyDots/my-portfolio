<?php
// Contact subject
$subject ="$subject"; 
// Details
$message="$message";

// Mail of sender
$mail_from="$email"; 
// From 
$header="from: $name <$mail_from>";

// Enter your email address
$to ='aghoshpro@gmail.com';

$send_contact=mail($to,$subject,$message,$header);

// Check, if message sent to your email 
// display message "We've recived your information"
if($send_contact){
echo "We've recived your contact information";
}
else {
echo "ERROR";
}
?>