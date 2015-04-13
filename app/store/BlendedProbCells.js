Ext.define('MPT.store.BlendedProbCells',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.BlendedProbCell',
    //storeId: 'blendedProbCells',
    
    model: 'MPT.model.BlendedProbCell',

    autoLoad:true,
    proxy: {
        type: 'ajax',
	//url: 'data/nsn3gProb.json',
        url: 'php/blended_prob_stat.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
