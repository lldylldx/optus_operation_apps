Ext.define('MPT.model.Avail3GCellWTarg',{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'RECORD_TIME',
		type: 'date',
		dateFormat: 'Y-m-d'
	}, {
		name: 'OUTAGE',
		type: 'float'
	},{
		name: 'AVAIL_RATE',
		type: 'float'
	},{
		name: 'TARGET_RATE',
		type: 'float'
	}]
});