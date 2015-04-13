<?php

require "../../../../cgi-bin/php/db_conn.php";

date_default_timezone_set('Australia/Sydney');
$date = date('Y-m-d', time());
$dir = "/home/appuser/web_data/$date/";
$file_out = 'blended_prob_stat.json';

if(! file_exists($dir.$file_out) )
{

$conn = conn_SLA();

if (!$conn) 
{
   $m = oci_error();
   echo $m['message'], "\n";
   exit;
}
else {
//  echo "Connected to SLA Oracle!";
}

$sql = "select to_char(DATE_TIME, 'yyyy-mm-dd') DATE_TIME, NSN, HUAWEI, (NSN+HUAWEI)BLENDED, U9 NSN_U9 from MPT_R_BLEND_PROBLEM_D where DATE_TIME >= trunc(sysdate) - 90";
//$sql = "select to_char(DATE_TIME, 'yyyy-mm-dd') DATE_TIME, NSN, HUAWEI, (NSN+HUAWEI)BLENDED, U9 NSN_U9 from MPT_R_BLEND_PROBLEM_D where DATE_TIME >= '01/APR/14'";

$stid = oci_parse($conn, $sql);
oci_execute($stid);

$result = array();
$sort_result = array();

while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	$result[] = $row;
	// var_dump($row);
}
oci_close($conn);

$i = 0;
foreach($result as $arr1)
{
	$sort_result[$i++] = $arr1['DATE_TIME'];
}
asort($sort_result);
array_multisort($result, $sort_result);

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

