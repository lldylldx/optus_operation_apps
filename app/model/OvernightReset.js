Ext.define('MPT.model.OvernightReset',{
	extend: 'Ext.data.Model',
	    fields: [{
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
        name: 'TRIG_REASON',
        type: 'string'
	},{
	name: 'IP_ADDRESS',
        type: 'string'

    }]

});