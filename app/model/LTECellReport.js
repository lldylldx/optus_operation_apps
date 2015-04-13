Ext.define('MPT.model.LTECellReport',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'RECORD_TIME',
        type: 'date',
	dateFormat: 'Y-m-d'
    }, {
        name: 'SITE_NAME',		
	type: 'string'
    }, {
        name: 'CELL_NAME',		
	type: 'string'
    }, {
        name: 'TRIG_TYPE',		
	type: 'string'
    }, {
        name: 'OCCUR30',		
        type: 'int'
    }, {
        name: 'OCCUR7',		
        type: 'int'
    }, {
        name: 'STATE',		
        type: 'string'
    }
    ]
});