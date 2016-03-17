<?php
$myemail = 'jono@jonokane.com';
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$to = $myemail;
$email_subject = "New message from jonokane.com: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email_address\n Message \n $message";
$headers = "From: $email_address\n";
$headers .= "Reply-To: $email_address";


$email_check = '';
$return_arr = array();

if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) || filter_var($_POST['email_post'], FILTER_VALIDATE_EMAIL)) {
   $email_check = 'valid';
	mail($to,$email_subject,$email_body,$headers);
}
else {
    $email_check = 'invalid';
}

$return_arr["email_check"] = $email_check;

if (isset($_POST['email'])){
    $return_arr["name"] = $_POST['name'];
    $return_arr["email"] = $_POST['email'];
} else {
    $return_arr["name"] = $_POST['name_post'];
    $return_arr["email"] = $_POST['email_post'];

}

echo json_encode($return_arr);



?>