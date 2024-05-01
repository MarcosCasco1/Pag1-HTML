<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $telefono = $_POST["telefono"];
  $ciudad = $_POST["ciudad"];
  $comentario = $_POST["comentario"];

  $destinatario = "tucorreo@example.com";
  $asunto = "Nuevo mensaje de contacto desde tu sitio web";
  $mensaje = "Nombre: $nombre\nCorreo electrónico: $email\nNúmero de celular: $telefono\nCiudad: $ciudad\nComentario: $comentario";
  $headers = "From: $email";

  if (mail($destinatario, $asunto, $mensaje, $headers)) {
    echo "¡Gracias! Tu mensaje ha sido enviado correctamente.";
  } else {
    echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
  }
} else {
  echo "Acceso denegado.";
}
?>
