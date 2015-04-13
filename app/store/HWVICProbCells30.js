Ext.define('MPT.store.HWVICProbCells30',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    model: 'MPT.model.NSNProbCell',
    autoLoad: true,
    proxy: {
        type: 'ajax',	 
        url: 'php/hw_tails_vic_30.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});