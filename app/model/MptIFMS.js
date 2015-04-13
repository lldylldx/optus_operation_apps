Ext.define('MPT.model.MptIFMS.js',{
    extend: 'Ext.data.Model',
    fields: [{
       name: 'RECORD_TIME',
	type: 'date',
	dateFormat:'dmY H'   	
    },	{
        name: 'CELL_ID',
        type: 'int'
    },	{
        name: 'WBTS_NUMBER',
        type: 'int'
    },	{
        name: 'IFMS_NO',
        type: 'int',
    },	{
        name: 'CASE_NO',
        type: 'int'
    },	{
        name: 'IFMS_STATUS',
        type: 'string'
    },	{
        name: 'IFMS_OWNER',
        type: 'string'
    }]    
});