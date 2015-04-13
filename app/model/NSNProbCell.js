Ext.define('MPT.model.NSNProbCell',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'DATE_TIME',
        type: 'date',
	dateFormat: 'Y-m-d'
    }, {
        name: 'HS',		
	type: 'int'
    }, {
        name: 'RRC',		
        type: 'int'
    },
	{
        name: 'DCR',		
        type: 'int'
    },
	{
        name: 'RAB',		
        type: 'int'
    },
	{
        name: 'TOTAL',	
	type: 'int'
	}	
    ],
    idProperty: 'nsnprobcell' 
});
