Ext.define('MPT.store.NSNProbCells',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    storeId: 'nsnProbCells',
    
    model: 'MPT.model.NSNProbCell',

    autoLoad:true,
    proxy: {
        type: 'ajax',
	//url: 'data/nsn3gProb.json',
        url: 'php/nsn_prob_stat.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
