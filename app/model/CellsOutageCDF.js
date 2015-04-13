Ext.define('MPT.model.CellsOutageCDF',{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'RESULT_TIME',
		type: 'date',
		dateFormat: 'd-M-y'
	}, {
		name: 'HOUR_DIVISION',
		type: 'string'
	}, {
		name: 'CELL_COUNT',
		type: 'int'
	}, {
		name: 'PCT_DIST',
		type: 'float'
	}]
});