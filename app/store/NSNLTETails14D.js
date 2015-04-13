Ext.define('MPT.store.NSNLTETails14D',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.LTECellTail',
    storeId: 'nsnltetails14d',
    
    model: 'MPT.model.LTECellTail',

    autoLoad: true,
    proxy: {
        type: 'ajax',
	 //url: 'data/nsn3gProb.json',
        url: 'php/nsn_lte_prob_stat14.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});