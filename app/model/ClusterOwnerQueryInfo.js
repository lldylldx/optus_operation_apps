Ext.define('MPT.model.ClusterOwnerQueryInfo',{
	extend: 'Ext.data.Model',
	fields: [{
        name: 'RECORD_TIME',
        type: 'date',
	 dateFormat: 'Ymd'    
    },	{
        name: 'CLUSTER_NAME',
        type: 'string'
    },	{
	 name: 'VENDOR',
        type: 'string'
    },	{
	 name: 'CONGESTION',
        type: 'int'
    },	{
	 name: 'FAULTS',
        type: 'int'
    },	{
	 name: 'SW_ISSUE',
        type: 'int'
    },	{
	 name: 'SPECIAL_EVENTS',
        type: 'int'
    },	{
	 name: 'DCR_TRAINSTATION',
        type: 'int'
    },	{
	 name: 'RRC_MS_FAIL',
        type: 'int'
    },	{
        name: 'UNDER_INVESTIGATION',
        type: 'int'	
    },	{
        name: 'RURAL_AREA',
        type: 'int'
    },	{
        name: 'PLANED_ACTIONS',
        type: 'int'
    },	{
        name: 'TOTAL_NO',
        type: 'int'
    }]

});