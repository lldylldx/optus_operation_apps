Ext.define('MPT.model.SleepingCell',{
	extend: 'Ext.data.Model',
	    fields: [{
        name: 'RC',
        type: 'string'
    }, {
        name: 'RNC_NAME',
		type: 'string'
    }, {
        name: 'WBTS_NUMBER',
        type: 'int'
    },	{
        name: 'CELL_ID',
        type: 'int'
    },	{
        name: 'WCEL_NAME',
        type: 'string'
    },	{
        name: 'NE_TYPE',
        type: 'string'
    },	{
        name: 'U9',
        type: 'boolean'
    },	{
	 name: 'TRIG_REASON',
        type: 'string'
    },	{
        name: 'STATE',
        type: 'string'	
    },	{
	name: 'IP_ADDRESS',
        type: 'string'
    }]

});