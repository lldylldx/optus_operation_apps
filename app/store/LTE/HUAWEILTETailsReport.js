Ext.require([
    'Ext.grid.*',
    'Ext.data.*'

]);

Ext.define('MPT.store.LTE.HUAWEILTETailsReport',{
	extend:'Ext.data.Store',
	requires:'MPT.model.LTECellReport',
	//autoDestroy: true,
	autoLoad: false,
	model:'MPT.model.LTECellReport',	
	proxy:{
		type:'ajax',
		//url:'data/LTE/nsn_lte_tail_cells_d.json',
		url:'php/LTE/huawei_lte_tails_report.php',
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