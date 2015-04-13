<?php

require "../../../../../cgi-bin/php/db_conn.php";

if( isset($_POST["clusterOwner"]))
{
	$clusterOwner = $_POST["clusterOwner"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'clusterName is empty!');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["updDate"]) )
{
	$updDate = $_POST["updDate"];
	//$endDate = $_POST["updDate"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'Date is empty!');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["endDate"]) )
{
	$endDate = $_POST["endDate"];
}
else
{
	/*$o = array(
	"success"=>false,
	"reason"=>'Date is empty!');
	echo json_encode($o);
	exit(1);*/
	//$endDate = $updDate;
}

$conn = conn_SLA();

if (!$conn) 
{
   $m = oci_error();
   	$o = array(
	"success"=>false,
	"reason"=>$m['message']);
	echo json_encode($o);
   // echo $m['message'], "\n";
   exit(1);
}
else {
 // echo "Connected to SLA Oracle!";
}

$sql = "SELECT to_char(B.RECORD_TIME,'yyyymmdd') RECORD_TIME,B.CLUSTER_NAME,B.VENDOR,B.CONGESTION,B.FAULTS,B.SOFTWAREISSUE SW_ISSUE,B.SPECIALEVENTS SPECIAL_EVENTS,B.DCRTRAINSTATION DCR_TRAINSTATION,
       B.RRCMSFAILS RRC_MS_FAIL,B.UNDERINVESTIGATION UNDER_INVESTIGATION,B.RURALAREA RURAL_AREA, B.PlanedActions Planed_Actions,A.TOTAL TOTAL_NO FROM (
select record_time, tech_type, cluster_name, cluster_owner, sum(tail_no) total, vendor from MPT_CLUSTER_TAILS_INFO
where record_time between to_date(:updDate,'mm/dd/yyyy') and to_date(:endDate,'mm/dd/yyyy')
group by cluster_owner, cluster_name, tech_type, vendor,record_time) A,
(select RECORD_TIME, cluster_name, cluster_owner, VENDOR, NVL(Congestion, 0) Congestion, NVL(Faults, 0) Faults, NVL(SoftwareIssue, 0) SoftwareIssue, NVL(SpecialEvents, 0) SpecialEvents,
NVL(DCRTrainStation,0) DCRTrainStation, NVL(RRCMsFails, 0) RRCMsFails, NVL(UnderInvestigation, 0) UNDERINVESTIGATION,  NVL(RuralArea, 0) RuralArea, NVL(PlanedActions, 0) PlanedActions
from
(
select * from MPT_CLUSTER_TAILS_INFO
where record_time between to_date(:updDate,'mm/dd/yyyy') and to_date(:endDate,'mm/dd/yyyy')
)
pivot
(
  MAX(tail_no) for tail_reason in ('Congestion' as Congestion, 'Faults' as Faults, 'SoftwareIssue' as SoftwareIssue, 'SpecialEvents' as SpecialEvents, 'DCRTrainStation' as DCRTrainStation, 'RRCMsFails' as RRCMsFails, 'UnderInvestigation' as UnderInvestigation, 'RuralArea' as RuralArea, 'PlanedActions' as PlanedActions )
)) B
WHERE A.RECORD_TIME = B.RECORD_TIME AND A.CLUSTER_NAME = B.CLUSTER_NAME AND A.CLUSTER_OWNER = B.CLUSTER_OWNER
and B.CLUSTER_OWNER = :clusterOwner
order by RECORD_TIME,CLUSTER_NAME";

$stmt = oci_parse($conn, $sql);
oci_bind_by_name($stmt,':updDate', $updDate);
oci_bind_by_name($stmt,':endDate', $endDate);
oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);

if( ! oci_execute($stmt) )
{
	$e = oci_error($conn);
	oci_close($conn);
	$o = array(
	"success"=>false,
	"reason"=>$e['message'] );
	echo json_encode($o);
	exit(1);
}
else
{
	//oci_commit($conn);
	$result = array();
	while (($row = oci_fetch_array($stmt, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
		$result[] = $row;
		// var_dump($row);
	}
	/*if(!$result)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}*/
	oci_close($conn);
	$o = array(
	"success"=>true,
	"totalCount"=>sizeof($result),
	"date"=>$endDate,
	//"clusterOwner"=>$clusterOwner,
	"rows"=>$result);
	echo json_encode($o);
	exit(1);
}

?>