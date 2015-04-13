<?php

require "../../../../../cgi-bin/php/db_conn.php";

 // date_default_timezone_set('Australia/Sydney');
 // $date = date('Y-m-d', time());

 // $dir = "/home/appuser/web_data/$date/";
 // $file_out = 'web.log';

if( isset($_POST["clusterName"]))
{
	$clusterName = $_POST["clusterName"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'clusterName');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["clusterOwner"]) )
{
	$clusterOwner = $_POST["clusterOwner"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'clusterOwner');
	echo json_encode($o);
	exit(1);	
}

$vendor = $_POST["vendor"];

if( isset($_POST["updDate"]) )
{
	$updDate = $_POST["updDate"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'updDate');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["congestion"]) )
{
	$congestion = $_POST["congestion"];
}
else
{
	$congestion = 0;
}

if( isset($_POST["faults"]) )
{
	$faults = $_POST["faults"];
}
else
{
	$faults = 0;
}

if( isset($_POST["softwareIssue"]) )
{
	$softwareIssue = $_POST["softwareIssue"];
}
else
{
	$softwareIssue = 0;
}

if( isset($_POST["specialEvents"]) )
{
	$specialEvents = $_POST["specialEvents"];
}
else
{
	$specialEvents = 0;
}

if( isset($_POST["dcrTrainStation"]) )
{
	$dcrTrainStation = $_POST["dcrTrainStation"];
}
else
{
	$dcrTrainStation = 0;
}

if( isset($_POST["rrcMsFails"]) )
{
	$rrcMsFails = $_POST["rrcMsFails"];
}
else
{
	$rrcMsFails = 0;
}

if( isset($_POST["underInvestigation"]) )
{
	$underInvestigation = $_POST["underInvestigation"];
}
else
{
	$underInvestigation = 0;
}

if( isset($_POST["newIssueName"]) )
{
	$newIssueName = $_POST["newIssueName"];
}
else
{
	$newIssueName = 0;
}

if( isset($_POST["newIssueVal"]) )
{
	$newIssueVal = $_POST["newIssueVal"];
}
else
{
	$newIssueVal = 0;
}

if( isset($_POST["ruralArea"]) )
{
	$ruralArea = $_POST["ruralArea"];
}
else
{
	$ruralArea = 0;
}

if( isset($_POST["planedActions"]) )
{
	$planedActions = $_POST["planedActions"];
}
else
{
	$planedActions = 0;
}

//$str_out = $clusterName.",".$clusterOwner.",".$vendor.",".$updDate.",".$congestion.",".$faults.",".$softwareIssue.",".$specialEvents.",".$dcrTrainStation;
//$str_out = $str_out.",".$rrcMsFails.",".$underInvestigation.",".$newIssueName.",".$newIssueVal."\n";


// $fp = fopen($dir.$file_out,'w');
// fwrite($fp, $str_out);
// fclose($fp);

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

$congestion_flg = 1;
if( $congestion )
{
//$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date('".$updDate."','mm/dd/yyyy'),'3G', '".$clusterName."', '".$clusterOwner."', 'Congestion', '".$congestion."', )";
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'Congestion',:congestion,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':congestion', $congestion);
	oci_bind_by_name($stmt,':vendor', $vendor);
	//$congestion_flg = oci_execute($stmt,OCI_DEFAULT);
	$congestion_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$congestion_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
// insert faults
$faults_flg = 1;
if( $faults )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'Faults',:faults,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':faults', $faults);
	oci_bind_by_name($stmt,':vendor', $vendor);
	//$faults_flg = oci_execute($stmt,OCI_DEFAULT);
	$faults_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$faults_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
// insert swIssue
$softwareIssue_flg = 1;
if( $softwareIssue )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'SoftwareIssue',:softwareIssue,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':softwareIssue', $softwareIssue);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$softwareIssue_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$softwareIssue_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
// insert specialEvents 
$specialEvents_flg = 1;
if( $specialEvents )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'SpecialEvents',:specialEvents,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':specialEvents', $specialEvents);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$specialEvents_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$specialEvents_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
// insert dcrTrainStation
$dcrTrainStation_flg = 1;
if( $dcrTrainStation )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'DCRTrainStation',:dcrTrainStation,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':dcrTrainStation', $dcrTrainStation);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$dcrTrainStation_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$dcrTrainStation_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}	
}
// insert rrcMsFails
$rrcMsFails_flg = 1;
if( $rrcMsFails )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'RRCMsFails',:rrcMsFails,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':rrcMsFails', $rrcMsFails);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$rrcMsFails_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$rrcMsFails_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
// insert underInvetigation
$underInvestigation_flg = 1;
if( $underInvestigation )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'UnderInvestigation',:underInvestigation,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':underInvestigation', $underInvestigation);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$underInvestigation_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$underInvestigation_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
//insert ruralArea
$ruralArea_flg = 1;
if( $ruralArea)
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'RuralArea',:ruralArea,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':ruralArea', $ruralArea);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$ruralArea_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$ruralArea_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
//insert planedActions
$planedActions_flg = 1;
if( $planedActions )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,'PlanedActions',:planedActions,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':planedActions', $planedActions);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$planedActions_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$planedActions_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}
// insert new Issue
$newIssue_flg = 1;
if( $newIssueName && $newIssueVal )
{
	$sql = "insert into MPT_CLUSTER_TAILS_INFO (RECORD_TIME, TECH_TYPE, CLUSTER_NAME, CLUSTER_OWNER, TAIL_REASON, TAIL_NO, VENDOR) values (to_date(:updDate,'mm/dd/yyyy'),'3G',:clusterName,:clusterOwner,:newIssueName,:newIssueVal,:vendor)";
	$stmt = oci_parse($conn, $sql);
	oci_bind_by_name($stmt,':updDate', $updDate);
	oci_bind_by_name($stmt,':clusterName', $clusterName);
	oci_bind_by_name($stmt,':clusterOwner', $clusterOwner);
	oci_bind_by_name($stmt,':newIssueName', $newIssueName);
	oci_bind_by_name($stmt,':newIssueVal', $newIssueVal);
	oci_bind_by_name($stmt,':vendor', $vendor);
	$newIssue_flg = oci_execute($stmt,OCI_DEFAULT);
	if(!$newIssue_flg)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
}

//check all the result flag
if( $congestion_flg && $faults_flg && $softwareIssue_flg && $specialEvents_flg && $dcrTrainStation_flg && $rrcMsFails_flg && $underInvestigation_flg && $newIssue_flg && $ruralArea_flg && $planedActions_flg )
{
	$result = oci_commit($conn);
	if(!$result)
	{
		$e = oci_error($conn);
		oci_close($conn);
		$o = array(
		"success"=>false,
		"reason"=>$e['message'] );
		echo json_encode($o);
		exit(1);		
	}
	oci_close($conn);
	$o = array(
	"success"=>true);
	echo json_encode($o);
	exit(1);	
}
else
{
	oci_rollback($conn);
	oci_close($conn);
	$o = array(
	"success"=>false,
	"reason"=>'Transaction Failed!');
	echo json_encode($o);
	exit(1);
}

?>