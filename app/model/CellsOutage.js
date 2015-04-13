Ext.define('MPT.model.CellsOutage',{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'RESULT_TIME',
		type: 'date',
		dateFormat: 'd-M-y'
	}, {
		name: 'VENDOR',
		type: 'string'
	}, {
		name: 'WBTS_NUMBER',
		type: 'int'
	}, {
		name: 'WCEL_NAME',
		type: 'string'
	}, {
		name: 'OUTAGE_HOUR',
		type: 'float'
	}]
});