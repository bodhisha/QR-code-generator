//let qrcode = select("img");
//let qrtext = select("textarea");
//let qrbtn = select("button");

//qrbtn.addEventListener("click", return validate && generateQR);

function validate() {
  var text = document.getElementById("text");
  if (text.value == "") {
    alert("Text Box cannot be empty");
    return false;
  } else {
    return true;
  }
}

function generateQR() {
  let qrcode = select("img");
  let qrtext = select("textarea");
  let qrbtn = select("button");
  let size = "1000x1000";
  let data = qrtext.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
}

function select(el) {
  return document.querySelector(el);
}
