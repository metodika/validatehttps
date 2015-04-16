
/*

example for configuration:

<?php
  $httpsUrl = 'https://www.metodika.com/robin/17460/dynamicurl/valid.php';
  $validateHttps = 1; //0 = false, 1 = true
?>

<!DOCTYPE html>

<html>
<head>
  <script type="text/javascript">
  var validateHttpsUrl = "<?=$httpsUrl?>";
  var validateHttps = "<?=$validateHttps?>";
  </script>
  <script type="text/javascript" src="validatehttps.js"></script>


  Just adding is enough:
  <script type="text/javascript" src="validatehttps.js"></script>

*/


var dynamicUrl = (typeof validateHttpsUrl == 'undefined' || validateHttpsUrl === "") ? 'https://www.metodika.com/robin/17460/dynamicurl/valid.php' : validateHttpsUrl;
var runValidation = (typeof validateHttps == 'undefined' || validateHttps === "") ? '1' : validateHttps;


function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  //set dynamicUrl via index php site
  xobj.open('GET', dynamicUrl, true);


  xobj.onreadystatechange = function () {


  if (xobj.status == "0") {
    //error

    callback(xobj.responseText);

  }else if(xobj.status == "200" && xobj.readyState == 4){

    callback(xobj.responseText);

  }else{
      //Nothing
  }
}
xobj.send(null);



}
var fullUrl = window.location.href;
var http = fullUrl.split('://');


if(http[0] === "http" && runValidation){

//console.log(window.location.href + "" + http);
// Call to function with anonymous callback
loadJSON(function(response) {

var fullUrl = window.location.href;
var http = fullUrl.split('//');
var warningText = "Unsecure SSL connection, please update browser.";

  if(response === ""){
    //Error

    /*
    *
    *     Warning box at the top
    *
    */

            document.body.style.marginTop = "50px";

            var validateWarning = '<div id="validateWrapper">';
            validateWarning += '<div id="content">';

            validateWarning += '<p>'+warningText+'</p>';

            validateWarning += '</div>';  //Content
            validateWarning += '</div>';  //validateWrapper

            document.body.innerHTML += validateWarning;

            document.getElementById('validateWrapper').style.width = "100%";
            document.getElementById('validateWrapper').style.position = "fixed";
            document.getElementById('validateWrapper').style.top = "0";
            document.getElementById('validateWrapper').style.textAlign = "center";
            document.getElementById('validateWrapper').style.backgroundColor = "rgb(236,236,236)";

            document.getElementById('validateWrapper').getElementsByTagName('p')[0].style.fontSize = "13px";



      console.log("Not safe");
      //window.location.href = 'http://' + http[1];

  }else{
    //Success

    jsonResponse = JSON.parse(response);
      if(jsonResponse.safe === "true"){

      window.location.href = 'https://' + http[1];

    }else{
      console.log("safe !== true");
    }
  }

})
}
