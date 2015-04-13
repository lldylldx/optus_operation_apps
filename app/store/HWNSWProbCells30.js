Ext.define('MPT.store.HWNSWProbCells30',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    model: 'MPT.model.NSNProbCell',
    autoLoad: true,
    proxy: {
        type: 'ajax',	 
        url: 'php/hw_tails_nsw_30.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
