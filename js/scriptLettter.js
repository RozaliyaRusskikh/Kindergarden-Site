// валидация поля email на стороне клиента

function ValidateEmail(inputText)
{
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var space = " ";
if(inputText.value.match(mailFormat))
{
document.formUser.email.focus();
return true;
}
else if(inputText.value.match(space)) {
alert("Вы ввели пробел");
document.formUser.email.focus();
}
else
{
alert("Пожалуйста, введите корректный адрес");
document.formUser.email.focus();
return false;
}
}




