Ext.define('MPT.store.NSNStateBreakdown',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.StateLevel',
    storeId: 'nsnstatebreakdown',
    
    model: 'MPT.model.StateLevel',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/nsn_prob_state_tdy.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});