Ext.define('MPT.store.SAWANTProbCells14',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNProbCell',
    //storeId: 'nsnProbCells14',    
    model: 'MPT.model.NSNProbCell',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/nsn_tails_sawant_14.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});
