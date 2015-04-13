Ext.define('MPT.model.Avail3GCell',{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'RECORD_TIME',
		type: 'date',
		dateFormat: 'Y-m-d'
	}, {
		name: 'OUTAGE',
		type: 'int'
	},{
		name: 'AVAIL_RATE',
		type: 'float'
	}]
});