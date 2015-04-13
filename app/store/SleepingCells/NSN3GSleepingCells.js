Ext.require([
    'Ext.grid.*',
    'Ext.data.*'

]);

Ext.define('MPT.store.SleepingCells.NSN3GSleepingCells',{
	extend:'Ext.data.Store',
	requires:'MPT.model.SleepingCell',
	//autoDestroy: true,
	autoLoad: false,
	model:'MPT.model.SleepingCell',	
	proxy:{
		type:'ajax',
		//url:'data/SleepingCells/nsn_3g_sleeping_cells.json',
		url:'php/SleepingCells/nsn_sleeping_cells.php',
		reader:{
			type: 'json',
			//record: 'rows',
			root: 'rows'
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

