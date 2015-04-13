Ext.define('MPT.model.RealtimeTail',{
    extend: 'Ext.data.Model',
    fields: [{
       name: 'REPORT_TIME',
	type: 'date',
	dateFormat:'dmY H'        	
    },	{
       name: 'RNC_NAME',
	type: 'string'        	
    },	{
        name: 'CELL_ID',
        type: 'int'
    },	{
        name: 'WCEL_NAME',
        type: 'string'
    },	{
        name: 'WBTS_NUMBER',
        type: 'int'
    },	{
        name: 'START_TIME',
        type: 'date',
	dateFormat:'dmY H'
    },	{
        name: 'REOCCUR',
        type: 'int'
    },	{
        name: 'ACTIVE_TAIL',
        type: 'boolean'
    },	{
	name: 'TRIG_TYPE',
	type: 'string'
    },{
        name: 'STATE',
        type: 'string'
    },	{
        name: 'VENDOR',
        type: 'string'
    },	{
        name: 'IFMS',
        type: 'number'
    },	{
        name: 'CASE_NO',
        type: 'string'
    }, {
        name: 'OWNER',
        type: 'string'
    }]    
});