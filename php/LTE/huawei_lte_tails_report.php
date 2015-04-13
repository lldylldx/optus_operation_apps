<?php

require "../../../../../cgi-bin/php/db_conn.php";

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

$sql = "select to_char(a.RECORD_TIME,'yyyy-mm-dd') RECORD_TIME, a.SITE_NAME, a.CELL_NAME, a.trig_type, c.occur occur30, d.occur occur7,
case when SITE_NAME like '%NSW%' then 'NSW'
when SITE_NAME like '%QLD%' then 'QLD'
when SITE_NAME like '%VIC%' then 'VIC'
when SITE_NAME like '%WA%' then 'WA'
when SITE_NAME like '%SA%' then 'SA'
when SITE_NAME like '%NT%' then 'NT'
when SITE_NAME like '%TAS%' then 'TAS'
when SITE_NAME like '%ACT%' then 'ACT'
END STATE
from
-- trig type
(SELECT record_time,SITE_NAME, CELL_NAME, CASE WHEN RRC = 1 THEN '|RRC' else '' end || case when ERAB_STP_SSR = 1 THEN '|ERAB_STP_SSR' else '' end || case when ERAB_DCR = 1 then '|ERAB_DCR' end TRIG_TYPE
FROM (
select record_time,SITE_NAME,CELL_NAME, NVL(RRC,0) RRC, NVL(ERAB_STP_SSR,0) ERAB_STP_SSR , NVL(ERAB_DCR,0) ERAB_DCR from
(select record_time,SITE_NAME,CELL_NAME,TRIG_TYPE from MPT_LTE_TAIL_CELLS_D where record_time >= trunc(sysdate-1) and vendor = 'HUAWEI')
pivot (count(trig_type) for trig_type in ('RRC' as RRC, 'ERAB_STP' AS ERAB_STP_SSR, 'ERAB_DCR' AS ERAB_DCR)))) a,
-- occur
(select cell_name, count(cell_name) occur from 
(select distinct record_time, cell_name from MPT_LTE_TAIL_CELLS_D where record_time >= trunc(sysdate-30) and vendor = 'HUAWEI') 
group by cell_name) c,
(select cell_name, count(cell_name) occur from 
(select distinct record_time, cell_name from MPT_LTE_TAIL_CELLS_D where record_time >= trunc(sysdate-7) and vendor = 'HUAWEI') 
group by cell_name) d
where a.cell_name = c.cell_name
and a.cell_name = d.cell_name
ORDER BY C.OCCUR DESC";

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
	$sort_result[$i++] = $arr1['OCCUR'];
}
asort($sort_result);
array_multisort($result, $sort_result);*/

$o = array(
"success"=>true 
,"totalCount"=>sizeof($result) 
,"rows"=>$result
);

echo json_encode($o);
?>

