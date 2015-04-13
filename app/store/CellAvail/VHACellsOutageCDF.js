Ext.define('MPT.store.CellAvail.VHACellsOutageCDF',{
	extend:'Ext.data.Store',
	requires:'MPT.model.CellsOutageCDF',
	model:'MPT.model.CellsOutageCDF',
	autoLoad: false,
	proxy:{
		type:'ajax',
		url: 'php/CellAvail/vha_cells_outage_cdf.php',
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