Ext.define('MPT.store.HWProbCells',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    //storeId: 'nsnProbCells',
    
    model: 'MPT.model.NSNProbCell',

    autoLoad:true,
    proxy: {
        type: 'ajax',
	//url: 'data/nsn3gProb.json',
        url: 'php/hw_prob_stat.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
