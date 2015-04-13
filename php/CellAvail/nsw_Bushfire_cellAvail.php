<?php

require "../../../../../cgi-bin/php/db_conn.php";

date_default_timezone_set('Australia/Sydney');
$date = date('Y-m-d', time());
$dir = "/home/appuser/web_data/$date/";
$file_out = 'nswBushfireAvail3G.json';

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

$sql = "select TO_CHAR(RESULT_TIME, 'yyyy-mm-dd') RECORD_TIME, ROUND(((SUM(UNAVAIL_SEC))/3600),2) AS OUTAGE,  ROUND(100*(1-((SUM(UNAVAIL_SEC))/3600)/(COUNT(CELL_ID)*24)),2) AS AVAIL_RATE, 99.7 AS TARGET_RATE  
FROM (SELECT a.result_time,
      b.wbts_number,
      b.cell_id,
      VS_CELL_UNAVAILTIME_SYS AS UNAVAIL_SEC
    FROM SLA_H3G_AVAIL_DAY A, nsw_bushfire_3g B
    WHERE RESULT_TIME >= '01/SEP/13'
    AND b.wbts_number = a.wbts_number 
    AND b.cell_id = a.cell_id 
    UNION ALL
    SELECT A.PERIOD_START_TIME AS RESULT_TIME,
      B.WBTS_NUMBER,
      B.CELL_ID,
      UNAVAIL_SEC
    FROM SLA_N3G_AVAIL_DAY A, nsw_bushfire_3g B
    WHERE PERIOD_START_TIME >= '01/SEP/13'
    AND b.wbts_number = a.wbts_number 
    AND b.cell_id = a.cell_id)
group by RESULT_TIME
ORDER BY 1 ASC";

/*$sql = "select TO_CHAR(RESULT_TIME, 'yyyy-mm-dd') RECORD_TIME, ROUND(((SUM(UNAVAIL_SEC))/3600),2) AS OUTAGE,  ROUND(100*(1-((SUM(UNAVAIL_SEC))/3600)/(COUNT(CELL_ID)*24)),2) AS AVAIL_RATE, 99.7 AS TARGET_RATE  
FROM (SELECT a.result_time,
      b.bcf_id,
      b.cell_id,
      a.vscell_outofservice_dur AS UNAVAIL_SEC
    FROM SLA_H2G_AVAIL_DAY A, nsw_bushfire_2g B
    WHERE RESULT_TIME >= '01/OCT/13'
    AND b.bcf_id = a.bcf_number 
    AND b.cell_id = a.cell_id 
    UNION ALL
    SELECT a.period_start_time AS RESULT_TIME,
      b.bcf_id,
      B.CELL_ID,
      a.unavail_sec
    FROM SLA_N2G_AVAIL_DAY A, nsw_bushfire_2g B
    WHERE PERIOD_START_TIME >= '01/OCT/13'
    AND b.bcf_id = a.bcf_id 
    AND b.cell_id = a.ci)
group by RESULT_TIME
ORDER BY 1 ASC";*/

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
	$sort_result[$i++] = $arr1['RECORD_TIME'];
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

