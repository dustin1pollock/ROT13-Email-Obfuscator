function str_rot13 (str) {
    return (str + '')
        .replace(/[a-z]/gi, function (s) {
            return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13))
        })
}

var email = str_rot13("ebgngvba13@grfgvat.pbz");

//Jquery example
$(".email-jquery").attr("href", "mailto:"+email).html(email);

//Raw Javascript
var x = document.getElementsByClassName("email-java");
for(i=0;i<x.length;i++){
    x[i].innerHTML = email;
    x[i].setAttribute('href','mailto:'+email);
}