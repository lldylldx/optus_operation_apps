Ext.define('MPT.store.RESET.OvernightResetAnalysis',{
	extend:'Ext.data.Store',
	requires:'MPT.model.ResetAnalysis',
	//autoDestroy: true,
	autoLoad: false,
	model:'MPT.model.ResetAnalysis',	
	proxy:{
		type:'ajax',
		url:'data/reset/overnight_reset_statistic.json',
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