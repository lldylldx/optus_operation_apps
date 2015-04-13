Ext.define('MPT.store.BlendedLTETails14',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.BlendedLTETail',
    storeId: 'blendedltetails14',
    
    model: 'MPT.model.BlendedLTETail',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/blended_lte_stat14.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});