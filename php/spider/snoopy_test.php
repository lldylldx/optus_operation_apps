<?php	
	include "Snoopy.class.php";
	$snoopy = new Snoopy;
	
	/*$snoopy->proxy_host = "proxy.optus.com.au";
	$snoopy->proxy_port = "8080";
	$snoopy->user = "thomas.gallos";
	$snoopy->pass = "avocation22";*/

	if($snoopy->fetch("http://10.22.105.3/login1.asp"))
	{
		echo "response code: ".$snoopy->response_code."<br>\n";
		while(list($key,$val) = each($snoopy->headers))
			echo $key.": ".$val."<br>\n";
		echo "<p>\n";
		
		echo "<PRE>".htmlspecialchars($snoopy->results)."</PRE>\n";
	}
	else
		echo "error fetching document: ".$snoopy->error."\n";

?> 