Ext.define('MPT.model.LTETailCell',{
	extend: 'Ext.data.Model',
	fields: [{
        name: 'TIME',
        type: 'date',
	 dateFormat: 'Ymd H'    
    },	{
        name: 'CELL_NAME',
        type: 'string'
    },	{
	 name: 'TRIG_REASON',
        type: 'string'
    },	{
	 name: 'TRIG_VAL',
        type: 'float'
    },	{
	 name: 'PRIMARY_REASON',
        type: 'string'
    },	{
	 name: 'PRIMARY_VAL',
        type: 'float'
    },	{
	 name: 'SECONDARY_REASON',
        type: 'string'
    },	{
	 name: 'SECONDARY_VAL',
        type: 'float'
    },	{
        name: 'STATE',
        type: 'string'	
    }]

});