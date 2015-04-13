<?php
 include "class.phpmailer.php";
// require_once('/home/appuser/php_lib/class.phpmailer.php');
 $mail = new PHPMailer(true); // the true param means it will throw exceptions on     errors, which we need to catch  
 $mail->IsSMTP(); // telling the class to use SMTP  
 try {   
 $mail->Host       = "smtp.optus.com.au"; // SMTP server   
 $mail->Port       = 25;                    // set the SMTP port   
 $mail->SetFrom('peter.tan@optus.net.au', 'Peter Tan');   
 $mail->AddAddress('peter.tan@optus.net.au', 'Peter Tan');   
 $mail->Subject = 'PHPMailer Test';    
 $mail->AddEmbeddedImage("Optus-AU.png", "my-attach", "Optus-AU.png");   
 $mail->Body = 'Your <b>HTML</b> with an embedded Image: <img src="cid:my-attach"> Here is an image!'; 
 $mail->IsHTML(true);  
 // $mail->AddAttachment('testRunApp.html'); // this is a regular attachment (Not inline)   
 $mail->Send();   
 echo "Message Sent OK<p></p>\n";
 } catch (phpmailerException $e) 
 {   
 echo $e->errorMessage(); //Pretty error messages from PHPMailer 
 } catch (Exception $e) 
 {   
 echo $e->getMessage(); //Boring error messages from anything else! 
 } 
 ?> 
