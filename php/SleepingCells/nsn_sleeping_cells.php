<?php

require "../../../../../cgi-bin/php/db_conn.php";

date_default_timezone_set('Australia/Sydney');
$date = date('Y-m-d', time());
$dir = "/home/appuser/web_data/$date/";
$file_out = 'aaa.json';

$conn = conn_DJDB();

if (!$conn) 
{
   $m = oci_error();
   echo $m['message'], "\n";
   exit;
}
else {
//  echo "Connected to DJDB Oracle!";
}

//$sql = "select to_char(DATE_TIME, 'yyyy-mm-dd') DATE_TIME, HS,RRC,DCR,RAB,TOTAL from MPT_R_HUAWEI_PROBLEM_D where DATE_TIME > sysdate -90";
$sql = "select RC,RNC_NAME,WBTS_NUMBER,CELL_ID,WCEL_NAME,NE_TYPE, 'HSUPA' TRIG_REASON, CASE WHEN (uarfcn = 3038) THEN 1 ELSE 0 END as U9, 
	CASE WHEN (RNC_NAME like '33%' or RNC_NAME like 'O3%') THEN 'VIC'
	WHEN (RNC_NAME like '22%' or RNC_NAME like 'B2%') THEN 'NSW'
	WHEN (RNC_NAME like '44%' or RNC_NAME like 'O4%') THEN 'QLD'
	WHEN (RNC_NAME like 'O5%' ) THEN 'SANT'
	WHEN (RNC_NAME like 'O6%') THEN 'WA'
	WHEN (RNC_NAME like 'O7%') THEN 'TAS'
	ELSE 'NULL' END AS STATE,
	WBTS_BTSIP_ADDRESS IP_ADDRESS
from
(Select wcel_id, 100*sum(Allo_Success_Edch_Int+Allo_Success_Edch_Bgr)/greatest(1,sum(Allo_Success_Edch_Int+Allo_Success_Edch_Bgr+Ul_Dch_Sel_Max_Hsupa_Usr_Int+Ul_Dch_Sel_Max_Hsupa_Usr_Bgr+Ul_Dch_Sel_Bts_Hw_Int+Ul_Dch_Sel_Bts_Hw_Bgr+Edch_Allo_Canc_Na_As_Int+Edch_Allo_Canc_Na_As_Bgr+Setup_Fail_Edch_Ue_Int+Setup_Fail_Edch_Ue_Bgr+Setup_Fail_Edch_Bts_Int+Setup_Fail_Edch_Bts_Bgr+Setup_Fail_Edch_Trans_Int+Setup_Fail_Edch_Trans_Bgr+Setup_Fail_Edch_Other_Int+Setup_Fail_Edch_Other_Bgr)) as HSUPA_ACC_Rate,
sum(Ul_Dch_Sel_Max_Hsupa_Usr_Int+Ul_Dch_Sel_Max_Hsupa_Usr_Bgr+Ul_Dch_Sel_Bts_Hw_Int+Ul_Dch_Sel_Bts_Hw_Bgr+Edch_Allo_Canc_Na_As_Int+Edch_Allo_Canc_Na_As_Bgr+Setup_Fail_Edch_Ue_Int+Setup_Fail_Edch_Ue_Bgr+Setup_Fail_Edch_Bts_Int+Setup_Fail_Edch_Bts_Bgr+Setup_Fail_Edch_Trans_Int+Setup_Fail_Edch_Trans_Bgr+Setup_Fail_Edch_Other_Int+Setup_Fail_Edch_Other_Bgr)  HSUPA_FAILS
From nokrww_ps_traffic_mnc1_raw 
where Period_Start_Time >= Sysdate - 5/24
group by trunc(PERIOD_START_TIME),wcel_id) b, KPI_CONFIG.jm_wcel_bth_current a
Where b.wcel_id = a.wcel_id (+)
and a.working_state like 'WO'
and HSUPA_ACC_Rate = 0
and HSUPA_FAILS=0
order by RC,RNC_NAME";

$stid = oci_parse($conn, $sql);
oci_execute($stid);

$result = array();
$sort_result = array();

while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	$result[] = $row;
	// var_dump($row);
}

$sql = "select RC,RNC_NAME,WBTS_NUMBER,CELL_ID,WCEL_NAME,NE_TYPE, 'HSDPA' TRIG_REASON, CASE WHEN (uarfcn = 3038) THEN 1 ELSE 0 END as U9, 
	CASE WHEN (RNC_NAME like '33%' or RNC_NAME like 'O3%') THEN 'VIC'
	WHEN (RNC_NAME like '22%' or RNC_NAME like 'B2%') THEN 'NSW'
	WHEN (RNC_NAME like '44%' or RNC_NAME like 'O4%') THEN 'QLD'
	WHEN (RNC_NAME like 'O5%' ) THEN 'SANT'
	WHEN (RNC_NAME like 'O6%') THEN 'WA'
	WHEN (RNC_NAME like 'O7%') THEN 'TAS'
	ELSE 'NULL' END AS STATE,
	WBTS_BTSIP_ADDRESS IP_ADDRESS
from
( select wcel_id, SUM(ALLO_HS_DSCH_FLOW_INT + ALLO_HS_DSCH_FLOW_BGR + DCH_SEL_MAX_HSDPA_USERS_INT + DCH_SEL_MAX_HSDPA_USERS_BGR + REJ_HS_DSCH_RET_INT + REJ_HS_DSCH_RET_BGR + SETUP_FAIL_RNC_HS_DSCH_INT + SETUP_FAIL_RNC_HS_DSCH_BGR + SETUP_FAIL_UE_HS_DSCH_INT + SETUP_FAIL_UE_HS_DSCH_BGR + SETUP_FAIL_BTS_HS_DSCH_INT + SETUP_FAIL_BTS_HS_DSCH_BGR + SETUP_FAIL_IUB_HS_TOTAL_INT + SETUP_FAIL_IUB_HS_TOTAL_BGR) Total_HSDPA_Selections,
SUM(REJ_HS_DSCH_RET_INT + REJ_HS_DSCH_RET_BGR + SETUP_FAIL_RNC_HS_DSCH_INT + SETUP_FAIL_RNC_HS_DSCH_BGR +SETUP_FAIL_UE_HS_DSCH_INT + SETUP_FAIL_UE_HS_DSCH_BGR+ SETUP_FAIL_BTS_HS_DSCH_INT + SETUP_FAIL_BTS_HS_DSCH_BGR + SETUP_FAIL_IUB_HS_TOTAL_INT + SETUP_FAIL_IUB_HS_TOTAL_BGR) HSDPA_SETUP_FAILS,   
100*DECODE(SUM(ALLO_HS_DSCH_FLOW_INT + ALLO_HS_DSCH_FLOW_BGR + DCH_SEL_MAX_HSDPA_USERS_INT + DCH_SEL_MAX_HSDPA_USERS_BGR + REJ_HS_DSCH_RET_INT + REJ_HS_DSCH_RET_BGR + SETUP_FAIL_RNC_HS_DSCH_INT + SETUP_FAIL_RNC_HS_DSCH_BGR + SETUP_FAIL_UE_HS_DSCH_INT + SETUP_FAIL_UE_HS_DSCH_BGR + SETUP_FAIL_BTS_HS_DSCH_INT + SETUP_FAIL_BTS_HS_DSCH_BGR + SETUP_FAIL_IUB_HS_TOTAL_INT + SETUP_FAIL_IUB_HS_TOTAL_BGR),0,0,SUM(ALLO_HS_DSCH_FLOW_INT+ ALLO_HS_DSCH_FLOW_BGR)/SUM(ALLO_HS_DSCH_FLOW_INT + ALLO_HS_DSCH_FLOW_BGR + DCH_SEL_MAX_HSDPA_USERS_INT + DCH_SEL_MAX_HSDPA_USERS_BGR + REJ_HS_DSCH_RET_INT + REJ_HS_DSCH_RET_BGR + SETUP_FAIL_RNC_HS_DSCH_INT + SETUP_FAIL_RNC_HS_DSCH_BGR + SETUP_FAIL_UE_HS_DSCH_INT + SETUP_FAIL_UE_HS_DSCH_BGR + SETUP_FAIL_BTS_HS_DSCH_INT + SETUP_FAIL_BTS_HS_DSCH_BGR + SETUP_FAIL_IUB_HS_TOTAL_INT + SETUP_FAIL_IUB_HS_TOTAL_BGR)) HSDPA_Accessibility_User         
from nokrww_ps_traffic_mnc1_raw
where Period_Start_Time >= Sysdate - 5/24
group by wcel_id) b, KPI_CONFIG.jm_wcel_bth_current a
Where b.wcel_id = a.wcel_id (+)
and a.working_state like 'WO'
and  total_hsdpa_selections=0
and HSDPA_SETUP_FAILS=0
and HSDPA_Accessibility_User=0
order by RC,RNC_NAME";

$stid = oci_parse($conn, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	$result[] = $row;
}

$sql = "select RC,RNC_NAME,WBTS_NUMBER,CELL_ID,WCEL_NAME,NE_TYPE, 'RRC' TRIG_REASON, CASE WHEN (uarfcn = 3038) THEN 1 ELSE 0 END as U9, 
	CASE WHEN (RNC_NAME like '33%' or RNC_NAME like 'O3%') THEN 'VIC'
	WHEN (RNC_NAME like '22%' or RNC_NAME like 'B2%') THEN 'NSW'
	WHEN (RNC_NAME like '44%' or RNC_NAME like 'O4%') THEN 'QLD'
	WHEN (RNC_NAME like 'O5%' ) THEN 'SANT'
	WHEN (RNC_NAME like 'O6%') THEN 'WA'
	WHEN (RNC_NAME like 'O7%') THEN 'TAS'
	ELSE 'NULL' END AS STATE,
	WBTS_BTSIP_ADDRESS IP_ADDRESS 
from  
(SELECT wcel_id, SUM (RRC_CONN_STP_ATT) RRC_CONN_STP_ATT,
100 *DECODE(SUM( RRC_CONN_STP_ATT - RRC_CONN_SETUP_ATT_REPEAT - 
RRC_CONN_ACC_REL_CELL_RESEL + RRC_CONN_SETUP_COMP_AFT_DIR - RRC_CONN_STP_REJ_EMERG_CALL),0,1,SUM(RRC_CONN_ACC_COMP+ 
RRC_CON_SETUP_COMP_DIRECTED) /SUM( RRC_CONN_STP_ATT - RRC_CONN_SETUP_ATT_REPEAT - RRC_CONN_ACC_REL_CELL_RESEL + 
RRC_CONN_SETUP_COMP_AFT_DIR - RRC_CONN_STP_REJ_EMERG_CALL)) RRC_ACC_STP_SUCC_RATE
FROM nokrww_ps_servlev_mnc1_raw
where Period_Start_Time >= Sysdate - 5/24
group by wcel_id) A, JM_WCEL_BTH E
WHERE A.WCEL_ID         = E.WCEL_ID(+)
AND E.WCEL_NAME        IS NOT NULL
and E.working_state like 'WO'
AND RRC_ACC_STP_SUCC_RATE = 0
AND RRC_CONN_STP_ATT=0
order by RC,RNC_NAME";

$stid = oci_parse($conn, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	$result[] = $row;
}

oci_close($conn);

$o = array(
"success"=>true 
,"totalCount"=>sizeof($result) 
,"rows"=>$result
);

echo json_encode($o);

?>

