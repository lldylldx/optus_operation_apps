<?php
require "../../../../cgi-bin/php/db_conn.php";
require "../../../../cgi-bin/php/log.php";

$log = new Logging();
$log->lfile('/home/appuser/log/html.log');

date_default_timezone_set('Australia/Sydney');
$date = date('Y-m-d', time());
$dir = "/home/appuser/web_data/$date/";
$file_out = 'nsn_prob_state_tdy.json';

if(! file_exists($dir.$file_out) )
{

$conn = conn_SLA();

if (!$conn) 
{
   $m = oci_error();
   //echo $m['message'], "\n";
   $log->lwrite($m['message']);
   exit;
}
else {
   $log->lwrite('conn_SLA() is OK!!!');
}
$log->lclose();

$sql = "select * from MPT_NSN_STATE_TODAY_V order by state";
$stid = oci_parse($conn, $sql);
oci_execute($stid);

$result = array();
$sort_result = array();

while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	$result[] = $row;
	// var_dump($row);
}
oci_close($conn);

/*$i = 0;
foreach($result as $arr1)
{
	$sort_result[$i++] = $arr1['DATE_TIME'];
}
asort($sort_result);
array_multisort($result, $sort_result);*/

$o = array(
"success"=>true 
,"totalCount"=>sizeof($result) 
,"rows"=>$result
);

$fp = fopen($dir.$file_out,'w');
fwrite($fp, json_encode($o));
fclose($fp);

echo json_encode($o);

}
else {  //read data from local file...

	echo file_get_contents($dir.$file_out);
}

?>

