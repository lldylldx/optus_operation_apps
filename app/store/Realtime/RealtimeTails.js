Ext.define('MPT.store.Realtime.RealtimeTails',{
	extend:'Ext.data.Store',
	xtype: 'realtimeTails',
	requires:'MPT.model.RealtimeTail',
	model:'MPT.model.RealtimeTail',
	autoLoad:false,
	proxy:{
		type:'ajax',
		url: 'php/realtime/nsn_realtime_tails.php',
		reader:{
			type:'json',
			root:'rows'
		}
	},
	listeners: {
        'load' :  {
            fn : function(store,records,options) {
                 //console.log(store.getCount());
		//alert('load is called!!');
		tailMask.destroy();
            },
            scope : this
        }
    }
});