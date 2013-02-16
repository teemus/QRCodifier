(function(){
if (document.getElementById("QRCodifier") !== null) {
	alert("Once should be good enough. ;)");
    return;
}
var qrCode = document.createElement("img");
qrCode.src = "http://chart.apis.google.com/chart?cht=qr&chs=220x220&chld=L&choe=UTF-8&chl=" + encodeURIComponent(document.location.href);
qrCode.setAttribute("style","margin:7px 0px 0px 0px;display:inline;");
var qrText = document.createElement("p");
qrText.setAttribute("style", "text-align:center;");
qrText.innerHTML = "Click to close";

qrCode.setAttribute("title", "QR code for this website - Scan it with your smartphone now!");
var qrCodeDiv = document.createElement("div");
qrCodeDiv.appendChild(qrCode);
qrCodeDiv.appendChild(qrText);
qrCodeDiv.setAttribute("id", "QRCodifier");
var top = Math.max(window.innerHeight/2 - 130 + window.scrollY, 0);
var left = Math.max(window.innerWidth/2 - 130, 0);
qrCodeDiv.setAttribute("onclick", "javascript:document.getElementById(\"QRCodifier\").parentNode.removeChild(document.getElementById(\"QRCodifier\"))");
qrCodeDiv.setAttribute("style", "background-color:#000;color:#fff;text-align:center;margin:0px;padding:0px;width:260px;height:260px;border:4px solid #e00;z-index:5000;position:absolute;top:" + top + "px;" + "left:" + left + "px;");

var dBody = document.getElementsByTagName("body");
dBody[0].insertBefore(qrCodeDiv, dBody[0].childNodes[0]);
setTimeout(function(){ document.getElementById("QRCodifier").style.border="4px solid #000"; }, 550);
})();
