function verific() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  
  let emailFake = "teste@gmail.com";
  let senhaFake = "0000";
  
  if(emailFake == email.value){
    if(senhaFake == senha.value){
      document.getElementById('qrcode').style.display = 'none';
      document.getElementById('perfil').style.display = 'block';
      setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
      }, 3000);
    }
  }
}