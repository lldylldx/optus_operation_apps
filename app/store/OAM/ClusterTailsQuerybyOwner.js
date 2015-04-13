Ext.define('MPT.store.OAM.ClusterTailsQuerybyOwner',{
	extend:'Ext.data.Store',
	requires:'MPT.model.ClusterOwnerQueryInfo',
	//autoDestroy: true,
	autoLoad: false,
	model:'MPT.model.ClusterOwnerQueryInfo',	
	proxy:{
		type:'ajax',
		//url:'data/LTE/nsn_lte_tail_cells_d.json',
		//url:'php/LTE/nsn_lte_tails_hourly.php',
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