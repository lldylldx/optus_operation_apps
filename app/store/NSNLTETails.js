Ext.define('MPT.store.NSNLTETails',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.LTECellTail',
    storeId: 'nsnltetails',
    
    model: 'MPT.model.LTECellTail',

    autoLoad: true,
    proxy: {
        type: 'ajax',
	 //url: 'data/nsn3gProb.json',
        url: 'php/nsn_lte_prob_stat.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});