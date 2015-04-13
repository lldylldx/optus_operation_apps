Ext.define('MPT.store.CellAvail.VHACellsOutage',{
	extend:'Ext.data.Store',
	requires:'MPT.model.CellsOutage',
	model:'MPT.model.CellsOutage',
	autoLoad: false,
	proxy:{
		type:'ajax',
		//url:'data/CellAvail/optus_lead_cellAvail_WTarg.json',
		url: 'php/CellAvail/vha_cells_outage.php',
		reader:{
			type:'json',
			root:'rows'
		}
	},
	listeners: {
        'load' :  {
            fn : function(store,records,options) {
                 //console.log(store.getCount());

            },
            scope : this
        }
	}
});