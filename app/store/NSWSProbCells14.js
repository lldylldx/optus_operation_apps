Ext.define('MPT.store.NSWSProbCells14',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    model: 'MPT.model.NSNProbCell',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/nsn_tails_nsw_s_14.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
