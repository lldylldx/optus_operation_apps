Ext.define('MPT.model.LTECellTail',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'DATE_TIME',
        type: 'date',
	dateFormat: 'Y-m-d'
    }, {
        name: 'RRC',		
        type: 'int'
    },
	{
        name: 'ERAB_DCR',		
        type: 'int'
    },
	{
        name: 'ERAB_SSR',		
        type: 'int'
    },
	{
        name: 'TOTAL',	
	type: 'int'
	}	
    ],
    idProperty: 'ltecelltail' 
});