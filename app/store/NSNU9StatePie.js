Ext.define('MPT.store.NSNU9StatePie',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.StateLevel',
    storeId: 'nsnU9StatePie',
    
    model: 'MPT.model.StateLevel',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/nsn_U9_state_pie.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});