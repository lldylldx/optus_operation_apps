Ext.require([
    'Ext.grid.*',
    'Ext.data.*'

]);

Ext.define('MPT.store.RESET.OvernightResetSites',{
	extend:'Ext.data.Store',
	requires:'MPT.model.OvernightReset',
	//autoDestroy: true,
	autoLoad: false,
	model:'MPT.model.OvernightReset',	
	proxy:{
		type:'ajax',
		url:'data/reset/overnight_reset.json',
		//url:'/home/appuser/web_data/overnight_reset/overnight_reset.json',
		//url:'php/SleepingCells/nsn_sleeping_cells.php',
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