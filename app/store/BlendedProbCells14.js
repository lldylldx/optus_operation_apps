Ext.define('MPT.store.BlendedProbCells14',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.BlendedProbCell',
    storeId: 'blendedProbCells14',
    
    model: 'MPT.model.BlendedProbCell',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/blended_prob_stat14.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});