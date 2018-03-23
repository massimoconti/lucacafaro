<?php

require '_config.php';

#
# Verify captcha
$post_data = http_build_query(
  array(
    'secret' => RECAPTCHA_SECRET,
    'response' => $_POST['g-recaptcha-response'],
    'remoteip' => $_SERVER['REMOTE_ADDR']
  )
);

$context  = stream_context_create(array(
  'http' => array(
    'method'  => 'POST',
    'header'  => 'Content-type: application/x-www-form-urlencoded',
    'content' => $post_data
  )
));
$recaptcha_response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
$result = json_decode($recaptcha_response);

$response = [];
$response['recaptcha'] = $result;

if (false == $result->success)
  {
  $response['ok'] = false;
  $response['msg'] = 'Devi spuntare la voce "I\'m not a robot".';
  }
else
  {
  $response['ok'] = true;
  $response['msg'] = "Il tuo messaggio è stato inviato.";

  $message = '';
  $message .= 'Nome: '.strip_tags($_POST['nome']);
  $message .= 'Email: '.strip_tags($_POST['email']);
  $message .= 'Oggetto: '.strip_tags($_POST['oggetto']);
  $message .= 'Messaggio: '.strip_tags($_POST['messaggio']);

  mail(CONTACT_TO, 'Nuovo contatto dal sito', $message);
  }

echo json_encode($response);
