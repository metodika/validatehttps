
/*

example for configuration:

<?php
  $httpsUrl = 'https://www.metodika.com/valid.php';
  $validateHttps = 1; //0 = false, 1 = true
?>

<!DOCTYPE html>

<html>
<head>
  <script type="text/javascript">
  var validateHttpsUrl = "<?=$httpsUrl?>";
  var validateHttps = "<?=$validateHttps?>";
  var allowOnlyHttps = '<?=$account_settings->ONLY_HTTPS_CONNECTION?>';  
  </script>
  <script type="text/javascript" src="validatehttps.js"></script>


  Just adding is enough:
  <script type="text/javascript" src="validatehttps.js"></script>

*/
 
var dynamicUrl = (typeof validateHttpsUrl == 'undefined' || validateHttpsUrl === "") ? 'https://www.metodika.com/valid.php' : validateHttpsUrl;
var runValidation = (typeof validateHttps == 'undefined' || validateHttps === "") ? '1' : validateHttps;
var allowOnlyHttps = (typeof allowOnlyHttps == 'undefined' || allowOnlyHttps === "") ? '0' : allowOnlyHttps;
var warningText = (typeof warningText == 'undefined' || warningText === "") ? "Unsecure SSL connection. Please update your browser.  " : warningText + "  ";
var moreInfo = (typeof moreInfo == 'undefined' || moreInfo === "") ? "More info" : moreInfo;

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





            var validateWarning = '<div id="validateWrapper">';

 
            validateWarning += '<p>'+warningText+'<a href="http://www.macworld.com/article/2099987/what-you-need-to-know-about-apples-ssl-bug.html" target="_blank">'+moreInfo+'</a></p>';


            validateWarning += '</div>';  //validateWrapper

            document.body.innerHTML += validateWarning;

            document.getElementById('validateWrapper').style.display = "none";
            document.getElementById('validateWrapper').style.width = "100%";
            document.getElementById('validateWrapper').style.position = "absolute";
            document.getElementById('validateWrapper').style.top = "0";
            document.getElementById('validateWrapper').style.paddingTop = "10px";            
            document.getElementById('validateWrapper').style.textAlign = "center";
            document.getElementById('validateWrapper').style.backgroundColor = "rgb(236,236,236)";


            document.getElementById('validateWrapper').getElementsByTagName('p')[0].style.fontSize = "13px";





				
			var httpWarning = '<div id="httpBlock">';
				httpWarning += '<div>';
				httpWarning += '<p>'+warningText+'<a href="http://www.macworld.com/article/2099987/what-you-need-to-know-about-apples-ssl-bug.html" target="_blank">'+moreInfo+'</a></p>';
				httpWarning += '</div>';
	
				httpWarning += '</div>';
				document.body.innerHTML += httpWarning; 

				document.getElementById('httpBlock').style.visibility = 'hidden'; 
				document.getElementById('httpBlock').style.position = 'fixed'; 
				document.getElementById('httpBlock').style.left = '0px';
				document.getElementById('httpBlock').style.top = '0';
				document.getElementById('httpBlock').style.width = '100%';
				document.getElementById('httpBlock').style.height = '100%';
				document.getElementById('httpBlock').style.textAlign = 'center';
				document.getElementById('httpBlock').style.zIndex = '99999';
				document.getElementById('httpBlock').style.backgroundColor = 'rgba(0, 0, 0, 0.75)';

				document.getElementById('httpBlock').childNodes[0].style.border = '1px solid #999';
				document.getElementById('httpBlock').childNodes[0].style.border = '1px solid rgba(0,0,0,0.3)';
				document.getElementById('httpBlock').childNodes[0].style.webkitBorderRadius = '6px';
				document.getElementById('httpBlock').childNodes[0].style.mozBorderRadius = '6px';
				document.getElementById('httpBlock').childNodes[0].style.borderRadius = '6px';
				document.getElementById('httpBlock').childNodes[0].style.outline = 0;
				document.getElementById('httpBlock').childNodes[0].style.webkitBoxShadow = '0 3px 7px rgba(0,0,0,0.3)';
				document.getElementById('httpBlock').childNodes[0].style.mozBoxShadow = '0 3px 7px rgba(0,0,0,0.3)';
				document.getElementById('httpBlock').childNodes[0].style.boxShadow = '0 3px 7px rgba(0,0,0,0.3)';
				document.getElementById('httpBlock').childNodes[0].style.webkitBackgroundClip = 'padding-box';
				document.getElementById('httpBlock').childNodes[0].style.mozBackgroundClip = 'padding-box';
				document.getElementById('httpBlock').childNodes[0].style.backgroundClip = 'padding-box';
 

				document.getElementById('httpBlock').childNodes[0].style.position = 'fixed';
				document.getElementById('httpBlock').childNodes[0].style.backgroundColor = '#fff';
				document.getElementById('httpBlock').childNodes[0].style.border = '1px solid #000';
				document.getElementById('httpBlock').childNodes[0].style.padding = '15px';
				document.getElementById('httpBlock').childNodes[0].style.textAlign = 'center';
				document.getElementById('httpBlock').childNodes[0].style.top = '10%';

					//Small screen
				var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				if(w>767){
					document.getElementById('httpBlock').childNodes[0].style.width = '560px';
					document.getElementById('httpBlock').childNodes[0].style.left = '50%';
					document.getElementById('httpBlock').childNodes[0].style.marginLeft = '-280px'; 	
				}else{
					document.getElementById('httpBlock').childNodes[0].style.width = 'auto'; 
				}


     

var fullUrl = window.location.href;
var http = fullUrl.split('://');


if(http[0] === "http" && runValidation == 1){

document.body.style.marginTop = "50px";

// Call to function with anonymous callback
loadJSON(function(response) {

var fullUrl = window.location.href;
var http = fullUrl.split('//');

  if(response === ""){

    //Error


     //Warning box at the top

			if(allowOnlyHttps == 1){
		
				document.getElementById('httpBlock').style.visibility = 'visible';


				//Prevent DOM manipulation
				var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
				var target = document.querySelector('#httpBlock');
				var targetChild = document.querySelector('#httpBlock').childNodes[0];

					var observer = new MutationObserver(function(mutations) {
					  mutations.forEach(function(mutation) {
						location.reload();
					  });    
					});

				var config = { attributes: true, childList: true, characterData: true, attributeOldValue: true }

				observer.observe(target, config);
				observer.observe(targetChild, config);
				
			}else{
            	document.getElementById('validateWrapper').style.display = "block";
			}


      //console.log("Not safe");

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
