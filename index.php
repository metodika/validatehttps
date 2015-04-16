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

</head>
<body>

<h1 id="val">validatehttps</h1>

</body>
</html>
