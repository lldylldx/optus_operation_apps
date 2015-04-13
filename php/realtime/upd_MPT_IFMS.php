<?php
require "../../../../../cgi-bin/php/db_conn.php";

if( isset($_POST["case_no"]))
{
	$case_no = $_POST["case_no"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'case_no');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["cell_id"]))
{
	$cell_id = $_POST["cell_id"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'cell_id');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["wbts_number"]))
{
	$wbts_number = $_POST["wbts_number"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'wbts_number');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["ifms"]))
{
	$ifms = $_POST["ifms"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'ifms');
	echo json_encode($o);
	exit(1);
}

if( isset($_POST["owner"]))
{
	$owner= $_POST["owner"];
}
else
{
	$o = array(
	"success"=>false,
	"reason"=>'owner');
	echo json_encode($o);
	exit(1);
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

$sql = "insert into MPT_IFMS (RECORD_TIME,CELL_ID,WBTS_NUBMER,IFMS_NO,CASE_NO,IFMS_STATUS,IFMS_OWNER)
	values (sysdate,:cell_id,:wbts_number,:ifms_no,:case_no,'OPN',:owner)";
$stmt = oci_parse($conn, $sql);
oci_bind_by_name($stmt,':cell_id', $cell_id);
oci_bind_by_name($stmt,':wbts_number', $wbts_number);
oci_bind_by_name($stmt,':ifms_no', $ifms);
oci_bind_by_name($stmt,':case_no', $case_no);
oci_bind_by_name($stmt,':owner', $owner);
$result_flg = oci_execute($stmt,OCI_DEFAULT);

if(!$result_flg)
{
	$e = oci_error($conn);
	oci_close($conn);
	$o = array(
	"success"=>false,
	"reason"=>$e['message'] );
	echo json_encode($o);
	exit(1);		
}

$result_flg = oci_commit($conn);
if(!$result_flg)
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
?>