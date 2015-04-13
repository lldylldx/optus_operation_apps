<?php
require "../../../../cgi-bin/php/db_conn.php";
require "../../../../cgi-bin/php/log.php";

$log = new Logging();
$log->lfile('/home/appuser/log/html.log');

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

$sql = "select to_char(A.DATE_TIME, 'yyyy-mm-dd') DATE_TIME, A.total NSN, B.total HUAWEI, (A.total+B.total) BLENDED FROM MPT_R_NSN_LTE_D A, MPT_R_HUAWEI_LTE_D B
WHERE B.DATE_TIME = A.DATE_TIME 
AND A.DATE_TIME >= trunc(sysdate) - 90";
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

echo json_encode($o);

?>