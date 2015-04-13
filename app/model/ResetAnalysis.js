Ext.define('MPT.model.ResetAnalysis',{
	extend: 'Ext.data.Model',
	    fields: [{
        name: 'RESET_TIME',
		type: 'date',
		dateFormat:'d/m/Y'
    },	{
        name: 'RESIDUAL',
        type: 'int'
    },	{
        name: 'TOTAL',
        type: 'int'
    },	{
        name: 'UNRESTORED',
        type: 'int'
	},{
	name: 'RESTORED',
        type: 'int'

    }]

});