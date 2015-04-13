Ext.define('MPT.store.QLDProbCells14',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    model: 'MPT.model.NSNProbCell',

    autoLoad: true,
    proxy: {
        type: 'ajax',	 
        url: 'php/nsn_tails_qld_14.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
