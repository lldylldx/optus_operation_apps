Ext.define('MPT.store.HUAWEILTETails14D',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.LTECellTail',
    storeId: 'hwltetails14d',
    
    model: 'MPT.model.LTECellTail',

    autoLoad: true,
    proxy: {
        type: 'ajax',
	 //url: 'data/nsn3gProb.json',
        url: 'php/hw_lte_prob_stat14.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});