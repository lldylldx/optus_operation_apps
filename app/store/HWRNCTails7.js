Ext.define('MPT.store.HWRNCTails7',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.NSNRNCTails7',
    model: 'MPT.model.NSNRNCTails7',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/hw_rncs_tails_7.php',

        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});