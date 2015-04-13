Ext.define('MPT.store.HWProbCells14',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    storeId: 'nsnProbCells14',
    
    model: 'MPT.model.NSNProbCell',

    autoLoad: true,
    proxy: {
        type: 'ajax',
	 //url: 'data/nsn3gProb.json',
        url: 'php/hw_prob_stat14.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
