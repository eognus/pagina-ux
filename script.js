function cadastrar(){
   var a = document.forms["form1"]["país"].value.lenght;
    var b = document.forms["form1"]["nome"].value.lenght;
    var c = document.forms["form1"]["login"].value.lenght;
    var d = document.forms["form1"]["senha"].value.lenght;
    var e = document.forms["form2"]["tempo"].value.lenght;
  
     if (a == 0 || b == 0 || c == 0 || d == 0)
     {
     alert("Ainda há campos obrigatórios não preenchidos");
       return false;
     }else{
       alert("Seu cadastro foi realizado com sucesso!");
     }
}