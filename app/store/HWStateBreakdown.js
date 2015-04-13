Ext.define('MPT.store.HWStateBreakdown',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.StateLevel',
    storeId: 'hwStateBreakdown',
    
    model: 'MPT.model.StateLevel',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/hw_prob_state_tdy.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});