<?php

require "../../../../../cgi-bin/php/db_conn.php";

//date_default_timezone_set('Australia/Sydney');
//$date = date('Y-m-d', time());

//echo $_POST["startDate"];

//$dir = "/home/appuser/web_data/$date/";
//$file_out = 'form_test.txt';
 
$date = $_POST["startDate"];
//$date = '02/13/2013';

/*$fp = fopen($dir.$file_out,'w');
fwrite($fp, $date1);
fclose($fp);*/

//echo "{\"success\":true,\"rows\":20}";

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

$sql = "SELECT 
RESULT_TIME,
DECODE(RC,'HUAWEI','HUAWEI','NSN') AS VENDOR,
WBTS_NUMBER,
WCEL_NAME,
UNAVAIL_HOUR OUTAGE_HOUR
FROM MPT_CELLAVAIL_JV_VFLD_CEL_D_V
WHERE RESULT_TIME = to_date('".$date."', 'mm/dd/yyyy')
AND UNAVAIL_HOUR > 0";

//echo $sql."<br>";

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
	$sort_result[$i++] = $arr1['RESULT_TIME'];
}
asort($sort_result);
array_multisort($result, $sort_result);

$o = array(
"success"=>true 
,"totalCount"=>sizeof($result) 
,"rows"=>$result
);

echo json_encode($o);

?>