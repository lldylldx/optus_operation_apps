Ext.define('MPT.model.BlendedLTETail',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'DATE_TIME',
        type: 'date',
	dateFormat: 'Y-m-d'
    }, {
        name: 'NSN',		
	type: 'int'
    }, {
        name: 'HUAWEI',		
        type: 'int'
    },
	{
        name: 'BLENDED',		
        type: 'int'
    }
    ]
});