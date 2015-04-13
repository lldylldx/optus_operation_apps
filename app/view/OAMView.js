Ext.define('MPT.view.OAMView', {
    extend: 'Ext.tree.Panel',
    xtype: 'oamView',
    
    requires: [
        'MPT.store.OAMList'
    ],
    
    title: 'O&M',
    rootVisible: false,
    lines: true,
    useArrows: true,    
    store: 'OAMList'
});