
var $buttonReg = document.getElementById("Reg");
$buttonReg.addEventListener("click",handleRegReplace);
function handleRegReplace() {
    var $textAria = document.getElementById("reg-replace");
    $textAria.value = $textAria.value.replace(/\B('|')/g, '"');
    console.log($textAria.value);
event.stopPropagation()
}

var $buttonSub = document.getElementById("submit");
$buttonSub.addEventListener("click", function () {
    var $phoneTest = document.getElementById("phone");
    var regP = /\+\d\(\d\d\d\)\d\d\d-\d\d\d\d/;
    var regPhone = regP.test($phoneTest.value);
    if(regPhone === true){
        $phoneTest.className = "phonegreen"
    }else{
        $phoneTest.className = "phonered";
        var errorMes = document.createElement("span");
        errorMes.style.color = "red";
        errorMes.innerText = "**Вы ввели не правельный номер";
        var $wrapP = document.getElementById("phone-wrap");
        $wrapP.appendChild(errorMes);
    }

});
$buttonSub.addEventListener("click",function () {

    var $mailTest = document.getElementById("mail");
    var regM = /^([a-zA-Z\.\-])+\@(([a-zA-Z\-])+\.)+([ru]{2})+$/;
    var regMail = regM.test($mailTest.value);
    if(regMail === true){
        $mailTest.className = "phonegreen"
    }else{
        $mailTest.className = "phonered";
        var errorMes1 = document.createElement("span");
        errorMes1.style.color = "red";
        errorMes1.innerText = "**Вы ввели не правельный E-mail";
        var $wrapM = document.getElementById("mail-wrap");
        $wrapM.appendChild(errorMes1);
    }

});
