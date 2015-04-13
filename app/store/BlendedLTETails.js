Ext.define('MPT.store.BlendedLTETails',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.BlendedLTETail',
    storeId: 'blendedltetails',
    
    model: 'MPT.model.BlendedLTETail',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/blended_lte_stat.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});