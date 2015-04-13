<?php

require "../../../../../cgi-bin/php/db_conn.php";

$result = array();

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

/*$sql = "
select (select max(to_char(record_time,'ddmmyyyy hh24')) from MPT_TAIL_CELLS_H where record_time >= trunc(sysdate)) report_time, b.rnc_name, a.cell_id, b.wcel_name, a.wbts_number, c.start_time, a.reoccur,  
case when (a.cell_id in (select cell_id from MPT_TAIL_CELLS_H 
where record_time = (select max(record_time) from MPT_TAIL_CELLS_H where record_time >= trunc(sysdate)))) then 1 else 0 end as active_tail, b.state, vendor, d.ifms_no,
d.case_no, d.ifms_owner
from
(select cell_id, wbts_number, count(cell_id) reoccur, vendor from (
select distinct record_time,  cell_id, wbts_number, vendor from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate)
)
group by cell_id, wbts_number, vendor) a, sites_info_3g b,
(select distinct min(to_char(record_time,'ddmmyyyy hh24')) start_time, cell_id, wbts_number from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate)
group by cell_id, wbts_number) c, mpt_ifms d
where a.cell_id = c.cell_id
and a.wbts_number = c.wbts_number
and a.cell_id = b.cell_id
and a.wbts_number = b.wbts_number
and a.cell_id = d.cell_id
and a.wbts_number = d.wbts_number
and d.record_time > trunc(sysdate) -7
order by  active_tail desc, reoccur desc, start_time desc, rnc_name
";*/

/*$sql = "
select (select max(to_char(record_time,'ddmmyyyy hh24')) from MPT_TAIL_CELLS_H where record_time >= trunc(sysdate)) report_time, b.rnc_name, a.cell_id, b.wcel_name, a.wbts_number, c.start_time, a.reoccur,
case when (a.cell_id in (select cell_id from MPT_TAIL_CELLS_H 
where record_time = (select max(record_time) from MPT_TAIL_CELLS_H where record_time >= trunc(sysdate)))) then 1 else 0 end as active_tail, b.state, vendor, d.ifms_no IFMS,
d.case_no, d.ifms_owner OWNER
from
(select cell_id, wbts_number, count(cell_id) reoccur, vendor from (
select distinct record_time,  cell_id, wbts_number, vendor from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate)
)
group by cell_id, wbts_number, vendor) a, sites_info_3g b,
(select distinct min(to_char(record_time,'ddmmyyyy hh24')) start_time, cell_id, wbts_number from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate)
group by cell_id, wbts_number) c, (select * from mpt_ifms where RECORD_TIME > trunc(sysdate) -7) d
where a.cell_id = c.cell_id
and a.wbts_number = c.wbts_number
and a.cell_id = b.cell_id
and a.wbts_number = b.wbts_number
and a.cell_id = d.cell_id (+)
and a.wbts_number = d.WBTS_NUBMER(+)
order by  active_tail desc, reoccur desc, start_time desc, rnc_name";*/

$sql = "
select (select max(to_char(record_time,'ddmmyyyy hh24')) from MPT_TAIL_CELLS_H where record_time >= trunc(sysdate)) report_time, b.rnc_name, a.cell_id, b.wcel_name, a.wbts_number, c.start_time, a.reoccur,  
case when (a.cell_id in (select cell_id from MPT_TAIL_CELLS_H 
where record_time = (select max(record_time) from MPT_TAIL_CELLS_H where record_time >= trunc(sysdate)))) then 1 else 0 end as active_tail, b.state, vendor, d.ifms_no IFMS,
d.case_no, d.ifms_owner OWNER, e.TRIG_TYPE
from
(select cell_id, wbts_number, count(cell_id) reoccur, vendor from (
select distinct record_time,  cell_id, wbts_number, vendor from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate)
)
group by cell_id, wbts_number, vendor) a, sites_info_3g b,
(select distinct min(to_char(record_time,'ddmmyyyy hh24')) start_time, cell_id, wbts_number from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate)
group by cell_id, wbts_number) c, (select * from mpt_ifms where RECORD_TIME > trunc(sysdate) -7) d,
(select cell_id, wbts_number, case when RRC = 1 then '|RRC' else '' end ||
case when RAB = 1 then '|RAB' else '' end || case when HS = 1 then '|HS' else '' end || case when DCR = 1 then '|DCR' else '' end TRIG_TYPE
from (
select cell_id, wbts_number, NVL(HS,0) HS, NVL(RRC,0) RRC , NVL(DCR,0) DCR, NVL(RAB,0) RAB
from
(select distinct cell_id, wbts_number, trig_type from MPT_TAIL_CELLS_H
where record_time >= trunc(sysdate))
pivot (count(trig_type)
for trig_type
in ('RRC' as RRC,'RAB' as RAB,'DCR' as DCR,'HS' as HS)))) e
where a.cell_id = c.cell_id
and a.wbts_number = c.wbts_number
and a.cell_id = b.cell_id
and a.wbts_number = b.wbts_number
and a.cell_id = d.cell_id (+) 
and a.wbts_number = d.WBTS_NUBMER(+)
and a.cell_id = e.cell_id 
and a.wbts_number = e.wbts_number
order by  active_tail desc, reoccur desc, start_time desc, rnc_name";

$stid = oci_parse($conn, $sql);
oci_execute($stid);


//$sort_result = array();

while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	$result[] = $row;
	// var_dump($row);
}
oci_close($conn);

//$i = 0;
/*foreach($result as $arr1)
{
	$sort_result[$i++] = $arr1['RECORD_TIME'];
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