Ext.define('MPT.store.HUAWEILTETails',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.LTECellTail',
    storeId: 'huaweiltetails',
    
    model: 'MPT.model.LTECellTail',

    autoLoad: true,
    proxy: {
        type: 'ajax',
	 //url: 'data/nsn3gProb.json',
        url: 'php/hw_lte_prob_stat.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});