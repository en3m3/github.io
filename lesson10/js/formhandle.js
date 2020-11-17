var splitGet = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < splitGet.length; i++) {
    var keyValue = splitGet[i].split("=");
    $_GET[unescape(keyValue[0])] = unescape(keyValue[1]);
}

var name = $_GET.fullName; 
const nameTag = document.querySelector("#name");
nameTag.textContent =  name.replace('+', ' ');
