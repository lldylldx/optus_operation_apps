Ext.require([
    'Ext.grid.*',
    'Ext.data.*'

]);

Ext.define('MPT.store.LTE.NSNLteTailCellsDaily',{
	extend:'Ext.data.Store',
	requires:'MPT.model.LTETailCell',
	//autoDestroy: true,
	autoLoad: false,
	model:'MPT.model.LTETailCell',	
	proxy:{
		type:'ajax',
		//url:'data/LTE/nsn_lte_tail_cells_d.json',
		url:'php/LTE/nsn_lte_tails_daily.php',
		reader:{
			type: 'json',
			//record: 'rows',
			root: 'rows'
		}
	},
	listeners: {
        'load' :  {
            fn : function(store,records,options) {
                // console.log(store.getCount());
            },
            scope : this
        }
    }
});