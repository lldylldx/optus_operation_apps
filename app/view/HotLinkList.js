Ext.define('MPT.view.HotLinkList', {
    extend: 'Ext.tree.Panel',
    xtype: 'hotLinkList',
    
    requires: [
        'MPT.store.HotLinks'
    ],
    
    title: 'HotLinkList',
    rootVisible: false,
    lines: true,
    useArrows: true,    
    store: 'HotLinks'
});