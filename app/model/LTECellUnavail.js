Ext.define('MPT.model.LTECellUnavail',{
	extend: 'Ext.data.Model',
	fields: [{
        name: 'RECORD_TIME',
        type: 'date',
	 dateFormat: 'Ymd H'    
    },	{
        name: 'STATE',
        type: 'string'
    },	{
        name: 'CELL_NAME',
        type: 'string'
    },	{
	 name: 'UNAVAIL_SECONDS',
        type: 'float'	
    }]
});